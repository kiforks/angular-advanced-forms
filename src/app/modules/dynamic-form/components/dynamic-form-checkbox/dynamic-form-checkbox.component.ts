import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormControlBase } from '../../classes/dynamic-form-control-base';
import { dynamicFormControlProvider } from '../../providers/dynamic-form-control.provider';

@Component({
	selector: 'dynamic-form-checkbox',
	template: `
		<label [for]="data.key">{{ data.control.label }}</label>
		<input type="checkbox" [formControlName]="data.key" [checked]="data.control.value" [id]="data.key" />
	`,
	styles: [
		`
			:host {
				display: flex;
				align-items: center;
				margin-top: 10px;
			}
		`,
	],
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	viewProviders: [dynamicFormControlProvider],
})
export class DynamicFormCheckboxComponent extends DynamicFormControlBase {}
