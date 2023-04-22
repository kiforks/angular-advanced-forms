import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[validationErrorViewContainer]',
	standalone: true,
	exportAs: 'validationErrorViewContainer',
})
export class ValidationErrorViewContainerDirective {
	constructor(public readonly viewContainerRef: ViewContainerRef) {}
}
