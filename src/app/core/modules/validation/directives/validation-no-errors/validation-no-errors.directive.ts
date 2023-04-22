import { Directive } from '@angular/core';

@Directive({
	selector: '[validationNoErrors]',
	standalone: true,
})
export class ValidationNoErrorsDirective {}
