import { Component } from '@angular/core';

/** Classes */
import { DynamicFormControlBase } from '../../classes/dynamic-form-control-base';

/** Providers */
import { dynamicFormControlDeps, dynamicFormControlProvider } from '../../providers/dynamic-form-control.provider';

@Component({
	selector: 'dynamic-form-select',
	template: `
		<label [for]="data.key">{{ data.control.label }}</label>
		<select [formControlName]="data.key" [id]="data.key" [value]="data.control.value">
			<option *ngFor="let option of data.control.options" [value]="option.value">{{ option.label }}</option>
		</select>
	`,
	standalone: true,
	imports: [dynamicFormControlDeps],
	viewProviders: [dynamicFormControlProvider],
})
export class DynamicFormSelectComponent extends DynamicFormControlBase {}
