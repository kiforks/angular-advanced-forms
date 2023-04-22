import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
	selector: '[templateFormPasswordMatchValidator]',
	standalone: true,
	providers: [{ provide: NG_VALIDATORS, useExisting: TemplateFormPasswordMatchValidatorDirective, multi: true }],
})
export class TemplateFormPasswordMatchValidatorDirective implements Validator {
	public validate(control: AbstractControl<string>): ValidationErrors | null {
		const password = control.get('password');
		const confirmPassword = control.get('confirm-password');

		const error = {
			passwordShouldMatch: { mismatch: true },
		};

		if (password?.value === confirmPassword?.value) {
			return null;
		}

		confirmPassword?.setErrors(error);

		return error;
	}
}
