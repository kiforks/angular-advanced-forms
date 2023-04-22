import { Directive } from '@angular/core';

import { AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { VALIDATION_ERROR_STATE_MATCHER } from '../../tokens/validation-error-state-matcher.token';
import { ValidationErrorStateMatcher } from '../../interfaces/validation-error-state-matcher.interface';

@Directive({
	selector: '[validationOnTouchedError]',
	standalone: true,
	providers: [{ provide: VALIDATION_ERROR_STATE_MATCHER, useExisting: ValidationOnTouchedErrorDirective }],
})
export class ValidationOnTouchedErrorDirective implements ValidationErrorStateMatcher {
	public isErrorVisible(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return Boolean(control && control.invalid && (control.touched || (form && form.submitted)));
	}
}
