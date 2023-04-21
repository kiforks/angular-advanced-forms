import { Component } from '@angular/core';
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
				<div *ngFor="let control of data.control.controls | keyvalue" class="form-field">
<!--					<ng-container [dynamicFormControl]="{ control: control.value, key: control.key }"></ng-container>-->
				</div>
			</fieldset>
		</ng-container>
	`,
	standalone: true,
	imports: [CommonModule, DynamicFormControlDirective, ReactiveFormsModule],
})
export class DynamicFormGroupComponent extends DynamicFormControlBase {}
