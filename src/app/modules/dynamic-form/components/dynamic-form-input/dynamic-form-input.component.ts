import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormControlBase } from '../../classes/dynamic-form-control-base';
import { dynamicFormControlProvider } from '../../providers/dynamic-form-control.provider';

@Component({
	selector: 'dynamic-form-input',
	template: `
		<label [for]="data.key">{{ data.control.label }}</label>
		<input [formControlName]="data.key" [value]="data.control.value" [id]="data.key" [type]="data.control.type" />
	`,
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	viewProviders: [dynamicFormControlProvider],
})
export class DynamicFormInputComponent extends DynamicFormControlBase {}
