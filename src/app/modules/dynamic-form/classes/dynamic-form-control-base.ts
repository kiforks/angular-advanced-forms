import { Directive, HostBinding, inject, OnInit } from '@angular/core';
import { DYNAMIC_FORM_CONTROL_DATA } from '../tokens/dynamic-form-control-data.token';
import { AbstractControl, ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicFormControl } from '../interfaces/dynamic-form-control.interface';
import { reactiveFormBanWordValidator } from '../../reactive-form/validation/validators/reactive-form-ban-word.validator';

@Directive()
export class DynamicFormControlBase implements OnInit {
	@HostBinding('class') public hostClass = 'form-field';

	public readonly data = inject(DYNAMIC_FORM_CONTROL_DATA);

	protected readonly formControl: AbstractControl = new FormControl(
		this.data.control.value,
		this.resolveValidators(this.data.control)
	);

	private readonly parentGroupDir = inject(ControlContainer);

	public ngOnInit(): void {
		(this.parentGroupDir.control as FormGroup).addControl(this.data.key, this.formControl);
	}

	private resolveValidators({ validators = {} }: DynamicFormControl): Validators {
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
				return reactiveFormBanWordValidator(validatorValue);
			}

			return Validators.nullValidator;
		});
	}
}
