import { ChangeDetectionStrategy, Component, OnInit, Type } from '@angular/core';
import { Observable, Subject, switchMap, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DynamicFormControlType, DynamicFormControl, DynamicFormConfig } from '../../interfaces/dynamic-form';
import { banWords } from '../../../reactive-forms/validators/ban-words.validator';
import { DynamicFormControlResolverService } from '../../services/dynamic-form-control-resolver/dynamic-form-control-resolver.service';
import {
  DynamicFormControlInjectorPipe
} from '../../pipes/dynamic-form-control-injector/dynamic-form-control-injector.pipe';

@Component({
	selector: 'dynamic-forms',
	standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DynamicFormControlInjectorPipe],
	templateUrl: './dynamic-form.component.html',
	styleUrls: ['../../../../../assets/scss/common-page.scss', './dynamic-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnInit {
	public form!: FormGroup;

	public formConfig$!: Observable<DynamicFormConfig>;

	private readonly formLoadingTrigger = new Subject<'user' | 'company'>();

	constructor(
		private readonly httpClient: HttpClient,
		private readonly dynamicFormControlResolverService: DynamicFormControlResolverService
	) {}

	public ngOnInit(): void {
		this.formConfig$ = this.formLoadingTrigger.pipe(
			switchMap(config => this.httpClient.get<DynamicFormConfig>(`assets/json/${config}.form.json`)),
			tap(({ controls }) => this.buildForm(controls))
		);
	}

	public getControlComponentOutlet(controlType: DynamicFormControlType): Type<any> | null {
    return this.dynamicFormControlResolverService.resolve(controlType);
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

	private buildForm(controls: DynamicFormConfig['controls']) {
		this.form = new FormGroup({});

		Object.keys(controls).forEach(key => {
			const validators = this.resolveValidators(controls[key]);

			this.form.addControl(key, new FormControl(controls[key].value, validators));
		});
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
