import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormControlBase } from '../../classes/dynamic-form-control-base';
import { DynamicFormControlDirective } from '../../directives/dynamic-form-control/dynamic-form-control.directive';

@Component({
	selector: 'dynamic-form-group',
	template: `
		<ng-container [formGroup]="formGroup">
			<fieldset [formGroupName]="data.key">
				<legend>{{ data.control.label }}</legend>
				<ng-container *ngFor="let control of data.control.controls | keyvalue">
					<ng-container [dynamicFormControl]="{ control: control.value, key: control.key }"></ng-container>
				</ng-container>
			</fieldset>
		</ng-container>
	`,
	standalone: true,
	imports: [CommonModule, DynamicFormControlDirective, ReactiveFormsModule],
})
export class DynamicFormGroupComponent extends DynamicFormControlBase {
	@HostBinding('class') override hostClass = 'form-field-group';
}
