import { AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';

export interface ValidationErrorStateMatcher {
	isShowError(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean;
}
