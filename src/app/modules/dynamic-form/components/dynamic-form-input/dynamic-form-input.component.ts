import { Component } from '@angular/core';
import { DynamicFormControlBase } from '../../classes/dynamic-form-control-base';
import { dynamicFormControlDeps, dynamicFormControlProvider } from '../../providers/dynamic-form-control.provider';
import { ValidationOnTouchedErrorDirective } from '../../../../core/modules/validation/directives/validation-on-touched-error/validation-on-touched-error.directive';

@Component({
	selector: 'dynamic-form-input',
	template: `
		<label [for]="data.key">{{ data.control.label }}</label>
		<input
			validationOnTouchedError
			[formControlName]="data.key"
			[value]="data.control.value"
			[id]="data.key"
			[type]="data.control.type"
		/>
	`,
	standalone: true,
	imports: [dynamicFormControlDeps, ValidationOnTouchedErrorDirective],
	viewProviders: [dynamicFormControlProvider],
})
export class DynamicFormInputComponent extends DynamicFormControlBase {}
