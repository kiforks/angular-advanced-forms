import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	FormGroupDirective,
	FormBuilder,
	FormControl,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from '@angular/forms';

/** RxJS */
import { bufferCount, filter, Observable, startWith, Subscription, tap } from 'rxjs';

/** Services */
import { UserSkillsService } from '../../../../../core/user-skills.service';

/** Validators */
import { banWords } from '../../validators/ban-words.validator';
import { passwordShouldMatch } from '../../validators/password-should-match.validator';
import { UniqueNicknameValidator } from '../../validators/unique-nickname.validator';

@Component({
	selector: 'app-reactive-forms-page',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: './reactive-forms-page.component.html',
	styleUrls: ['../../../../scss/common-page.scss', '../../../../scss/common-form.scss', './reactive-forms-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveFormsPageComponent implements OnInit, OnDestroy {
	public phoneLabels = ['Main', 'Mobile', 'Work', 'Home'];
	public years = this.getYears();

	public skills$!: Observable<string[]>;

	public form = this.fb.group({
		firstName: ['Kostya', [Validators.required, Validators.minLength(4), banWords(['test', 'dummy'])]],
		lastName: ['Kifor', [Validators.required, Validators.minLength(2)]],
		nickname: [
			'kskifor',
			{
				validators: [
					Validators.required,
					Validators.minLength(2),
					Validators.pattern(/^[\w.]+$/),
					banWords(['dummy', 'anonymous']),
				],
				asyncValidators: [this.uniqueNickname.validate.bind(this.uniqueNickname)],
				updateOn: 'blur',
			},
		],
		email: ['k.kifor@tenantcloud.com', [Validators.email, Validators.required]],
		yearOfBirth: this.fb.nonNullable.control(2010, Validators.required),
		passport: ['', [Validators.pattern(/^[A-Z]{2}[0-9]{6}$/)]],
		address: this.fb.nonNullable.group({
			fullAddress: ['Address', Validators.required],
			city: ['City', Validators.required],
			postCode: ['002342', Validators.required],
		}),
		phones: this.fb.array([
			this.fb.group({
				label: this.fb.nonNullable.control(this.phoneLabels[0]),
				phone: '+380637575096',
			}),
		]),
		skills: this.fb.record<boolean>({}),
		password: this.fb.group(
			{
				password: ['123456', [Validators.required, Validators.minLength(6)]],
				confirmPassword: '123456',
			},
			{
				validators: passwordShouldMatch,
			}
		),
	});

	private ageValidators!: Subscription;
	private formPendingState!: Subscription;
	private initialFormValues!: unknown;

	@ViewChild(FormGroupDirective)
	private formDir!: FormGroupDirective;

	constructor(
		private userSkills: UserSkillsService,
		private fb: FormBuilder,
		private uniqueNickname: UniqueNicknameValidator,
		private cdr: ChangeDetectorRef
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
			new FormGroup({
				label: new FormControl(this.phoneLabels[0], { nonNullable: true }),
				phone: new FormControl(''),
			})
		);
	}

	public onRemovePhoneClick(index: number) {
		this.form.controls.phones.removeAt(index);
	}

	public onSubmit(e: Event) {
		console.log(e);
		console.log(this.form.value);

		this.initialFormValues = this.form.value;
		this.formDir.resetForm(this.form.value);
	}

	public onReset(e: Event) {
		console.log(e);

		e.preventDefault();
		this.formDir.resetForm({});
	}

	public onInitialDataClick(): void {
		this.formDir.resetForm(this.initialFormValues);
	}

	private getYears() {
		const now = new Date().getUTCFullYear();

		return Array(now - (now - 40))
			.fill('')
			.map((_, idx) => now - idx);
	}

	private buildSkillControls(skills: string[]) {
		skills.forEach(skill =>
			this.form.controls.skills.addControl(skill, new FormControl(false, { nonNullable: true }))
		);
	}

	private isAdult(yearOfBirth: number): boolean {
		const currentYear = new Date().getFullYear();

		return currentYear - yearOfBirth >= 18;
	}

	private setData(): void {
		this.skills$ = this.userSkills.getSkills().pipe(
			tap(skills => this.buildSkillControls(skills)),
			tap(() => (this.initialFormValues = this.form.value))
		);

		this.ageValidators = this.form.controls.yearOfBirth.valueChanges
			.pipe(
				tap(() => this.form.controls.passport.markAsDirty()),
				startWith(this.form.controls.yearOfBirth.value)
			)
			.subscribe(yearOfBirth => {
				this.isAdult(yearOfBirth)
					? this.form.controls.passport.addValidators(Validators.required)
					: this.form.controls.passport.removeValidators(Validators.required);

				this.form.controls.passport.updateValueAndValidity();
			});

		this.formPendingState = this.form.statusChanges
			.pipe(
				bufferCount(2, 1),
				filter(([prevState]) => prevState === 'PENDING')
			)
			.subscribe(() => this.cdr.markForCheck());
	}
}
