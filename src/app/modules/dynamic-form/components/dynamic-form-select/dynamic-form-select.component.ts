import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormControlBase } from '../../classes/dynamic-form-control-base';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'dynamic-form-select',
	template: `
		<ng-container [formGroup]="formGroup">
			<label [for]="data.key">{{ data.control.label }}</label>
			<select [formControlName]="data.key" [id]="data.key" [value]="data.control.value">
				<option *ngFor="let option of data.control.options" [value]="option.value">{{ option.label }}</option>
			</select>
		</ng-container>
	`,
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
})
export class DynamicFormSelectComponent extends DynamicFormControlBase {}
