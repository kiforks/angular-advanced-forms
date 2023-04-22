import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Forms */
import { FormGroupDirective, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

/** RxJS */
import { bufferCount, filter, Observable, startWith, Subscription, tap } from 'rxjs';

/** Services */
import { UserSkillsService } from '../../../../core/services/user-skills.service';

/** Validators */
import { reactiveFormBanWordValidator } from '../../validation/validators/reactive-form-ban-word.validator';
import { reactiveFormPasswordMatchValidator } from '../../validation/validators/reactive-form-password-match.validator';
import { ReactiveFormUniqueNicknameValidatorService } from '../../validation/services/reactive-form-unique-nickname-validator/reactive-form-unique-nickname-validator.service';
import { ValidationErrorMessageDirective } from '../../../../core/modules/validation/directives/validation-error-message/validation-error-message.directive';
import { ValidationOnTouchedErrorDirective } from '../../../../core/modules/validation/directives/validation-on-touched-error/validation-on-touched-error.directive';
import { ValidationNoErrorsDirective } from '../../../../core/modules/validation/directives/validation-no-errors/validation-no-errors.directive';

@Component({
	selector: 'reactive-form',
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		ValidationErrorMessageDirective,
		ValidationOnTouchedErrorDirective,
		ValidationNoErrorsDirective,
	],
	templateUrl: './reactive-form.component.html',
	styleUrls: [
		'../../../../../assets/scss/common-page.scss',
		'../../../../../assets/scss/common-form.scss',
		'./reactive-form.component.scss',
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	hostDirectives: [ValidationOnTouchedErrorDirective],
})
export class ReactiveFormComponent implements OnInit, OnDestroy {
	@ViewChild(FormGroupDirective) private readonly formGroup!: FormGroupDirective;

	public readonly phoneLabels = ['Main', 'Mobile', 'Work', 'Home'];
	public readonly years = this.getYears();

	public skills$!: Observable<string[]>;

	public readonly form = this.formBuilder.group({
		firstName: [
			'',
			[Validators.required, Validators.minLength(4), reactiveFormBanWordValidator(['test', 'dummy'])],
		],
		lastName: ['Kifor', [Validators.required, Validators.minLength(2)]],
		nickname: [
			'kskifor',
			{
				validators: [
					Validators.required,
					Validators.minLength(2),
					Validators.pattern(/^[\w.]+$/),
					reactiveFormBanWordValidator(['dummy', 'test']),
				],
				asyncValidators: [this.uniqueNicknameValidator.validate.bind(this.uniqueNicknameValidator)],
				updateOn: 'blur',
			},
		],
		email: ['k.kifor@tenantcloud.com', [Validators.email, Validators.required]],
		yearOfBirth: this.formBuilder.nonNullable.control(1996, Validators.required),
		passport: ['', [Validators.pattern(/^[A-Z]{2}[0-9]{6}$/)]],
		address: this.formBuilder.nonNullable.group({
			fullAddress: ['Address', Validators.required],
			city: ['City', Validators.required],
			postCode: ['002342', Validators.required],
		}),
		phones: this.formBuilder.array([
			this.formBuilder.group({
				label: this.formBuilder.nonNullable.control(this.phoneLabels[0]),
				phone: '+380637575096',
			}),
		]),
		skills: this.formBuilder.record<boolean>({}),
		password: this.formBuilder.group(
			{
				password: ['123456', [Validators.required, Validators.minLength(6)]],
				confirmPassword: '123456',
			},
			{
				validators: reactiveFormPasswordMatchValidator,
			}
		),
	});

	private ageValidators!: Subscription;
	private formPendingState!: Subscription;
	private initialFormValues!: unknown;

	constructor(
		private readonly userSkillsService: UserSkillsService,
		private readonly formBuilder: FormBuilder,
		private readonly uniqueNicknameValidator: ReactiveFormUniqueNicknameValidatorService,
		private readonly cdr: ChangeDetectorRef
	) {}

	public ngOnInit(): void {
		this.setData();
	}

	public ngOnDestroy(): void {
		this.ageValidators.unsubscribe();
		this.formPendingState.unsubscribe();
	}

	public onAddPhoneClick() {
		this.form.controls.phones.insert(
			0,
			this.formBuilder.group({
				label: this.formBuilder.control(this.phoneLabels[0], { nonNullable: true }),
				phone: this.formBuilder.control(''),
			})
		);
	}

	public onRemovePhoneClick(index: number) {
		this.form.controls.phones.removeAt(index);
	}

	public onSubmit(e: Event) {
		console.log(e);
		console.log(this.form.value);

		if (this.form.invalid) return;

		this.initialFormValues = this.form.value;
		this.formGroup.resetForm(this.form.value);
	}

	public onReset(e: Event) {
		console.log(e);

		e.preventDefault();
		this.formGroup.resetForm({});
	}

	public onInitialDataClick(): void {
		this.formGroup.resetForm(this.initialFormValues);
	}

	private getYears() {
		const now = new Date().getUTCFullYear();

		return Array(now - (now - 40))
			.fill('')
			.map((_, idx) => now - idx);
	}

	private buildSkillControls(skills: string[]) {
		skills.forEach(skill =>
			this.form.controls.skills.addControl(skill, this.formBuilder.control(false, { nonNullable: true }))
		);
	}

	private isAdult(yearOfBirth: number): boolean {
		const currentYear = new Date().getFullYear();

		return currentYear - yearOfBirth >= 18;
	}

	private setData(): void {
		const { yearOfBirth, passport } = this.form.controls;

		this.skills$ = this.userSkillsService.getSkills().pipe(
			tap(skills => this.buildSkillControls(skills)),
			tap(() => (this.initialFormValues = this.form.value))
		);

		this.ageValidators = yearOfBirth.valueChanges
			.pipe(
				tap(() => passport.markAsDirty()),
				startWith(yearOfBirth.value)
			)
			.subscribe(yearOfBirth => {
				this.isAdult(yearOfBirth)
					? passport.addValidators(Validators.required)
					: passport.removeValidators(Validators.required);

				passport.updateValueAndValidity();
			});

		this.formPendingState = this.form.statusChanges
			.pipe(
				bufferCount(2, 1),
				filter(([prevState]) => prevState === 'PENDING')
			)
			.subscribe(() => this.cdr.markForCheck());
	}
}
