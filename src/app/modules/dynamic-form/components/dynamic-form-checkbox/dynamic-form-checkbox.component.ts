import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormControlBase } from '../../classes/dynamic-form-control-base';

@Component({
	selector: 'dynamic-form-checkbox',
	template: `
		<ng-container [formGroup]="formGroup">
			<label [for]="data.key">{{ data.control.label }}</label>
			<input type="checkbox" [formControlName]="data.key" [checked]="data.control.value" [id]="data.key" />
		</ng-container>
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
})
export class DynamicFormCheckboxComponent extends DynamicFormControlBase {}
