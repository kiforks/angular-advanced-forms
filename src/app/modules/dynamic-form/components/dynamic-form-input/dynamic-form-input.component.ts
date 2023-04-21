import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormControlBase } from '../../classes/dynamic-form-control-base';

@Component({
	selector: 'dynamic-form-input',
	template: `
		<ng-container [formGroup]="formGroup">
			<label [for]="data.key">{{ data.control.label }}</label>
			<input
				[formControlName]="data.key"
				[value]="data.control.value"
				[id]="data.key"
				[type]="data.control.type"
			/>
		</ng-container>
	`,
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
})
export class DynamicFormInputComponent extends DynamicFormControlBase {}
