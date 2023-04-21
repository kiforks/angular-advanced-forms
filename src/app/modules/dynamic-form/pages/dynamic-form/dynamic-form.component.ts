import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicFormConfig } from '../../interfaces/dynamic-form.interface';
import { banWords } from '../../../reactive-forms/validators/ban-words.validator';
import { DynamicFormControlDirective } from '../../directives/dynamic-form-control/dynamic-form-control.directive';
import { DynamicFormControl, DynamicFormControls } from '../../interfaces/dynamic-form-control.interface';

@Component({
	selector: 'dynamic-forms',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, DynamicFormControlDirective],
	templateUrl: './dynamic-form.component.html',
	styleUrls: ['../../../../../assets/scss/common-page.scss', './dynamic-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnInit {
	public form!: FormGroup;

	public formConfig$!: Observable<DynamicFormConfig>;

	private readonly formLoadingTrigger = new Subject<'user' | 'company'>();

	constructor(private readonly httpClient: HttpClient) {}

	public ngOnInit(): void {
		this.formConfig$ = this.formLoadingTrigger.pipe(
			switchMap(config => this.httpClient.get<DynamicFormConfig>(`assets/json/${config}.form.json`)),
			tap(({ controls }) => this.buildForm(controls))
		);
	}

	public onLoadUserClick(): void {
		this.formLoadingTrigger.next('user');
	}

	public onLoadCompanyClick(): void {
		this.formLoadingTrigger.next('company');
	}

	public onSubmit() {
		console.log('Submitted data: ', this.form.value);
		this.form.reset();
	}

	private buildForm(controls: DynamicFormControls) {
		this.form = new FormGroup({});

		Object.keys(controls).forEach(key => this.buildControls(key, controls[key], this.form));
	}

	private buildGroup(controlKey: string, controls: DynamicFormControls, parentFormGroup: FormGroup) {
		if (!controls) return;

		const nestedFormGroup = new FormGroup({});

		Object.keys(controls).forEach(key => this.buildControls(key, controls[key], nestedFormGroup));

		parentFormGroup.addControl(controlKey, nestedFormGroup);
	}

	private buildControls(controlKey: string, config: DynamicFormControl, formGroup: FormGroup) {
		if (config.controlType === 'group') {
			this.buildGroup(controlKey, config.controls!, formGroup);

			return;
		}

		const validators = this.resolveValidators(config);

		formGroup.addControl(controlKey, new FormControl(config.value, validators));
	}

	private resolveValidators({ validators = {} }: DynamicFormControl) {
		return (Object.keys(validators) as Array<keyof typeof validators>).map(validatorKey => {
			const validatorValue = validators[validatorKey];

			if (validatorKey === 'required') {
				return Validators.required;
			}

			if (validatorKey === 'email') {
				return Validators.email;
			}

			if (validatorKey === 'requiredTrue') {
				return Validators.requiredTrue;
			}

			if (validatorKey === 'minLength' && typeof validatorValue === 'number') {
				return Validators.minLength(validatorValue);
			}

			if (validatorKey === 'banWords' && Array.isArray(validatorValue)) {
				return banWords(validatorValue);
			}

			return Validators.nullValidator;
		});
	}
}
