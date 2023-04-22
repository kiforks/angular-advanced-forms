import { AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';

export interface ValidationErrorStateMatcher {
	isErrorVisible(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean;
}
