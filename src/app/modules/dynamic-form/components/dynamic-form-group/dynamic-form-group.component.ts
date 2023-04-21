import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormControlBase } from '../../classes/dynamic-form-control-base';
import { DynamicFormControlDirective } from '../../directives/dynamic-form-control/dynamic-form-control.directive';
import { dynamicFormControlProvider } from '../../providers/dynamic-form-control.provider';
import { DynamicFormHelper } from '../../helpers/dynamic-form.helper';

@Component({
	selector: 'dynamic-form-group',
	template: `
		<fieldset [formGroupName]="data.key">
			<legend>{{ data.control.label }}</legend>
			<ng-container *ngFor="let control of data.control.controls | keyvalue : comparator">
				<ng-container [dynamicFormControl]="{ control: control.value, key: control.key }"></ng-container>
			</ng-container>
		</fieldset>
	`,
	standalone: true,
	imports: [CommonModule, DynamicFormControlDirective, ReactiveFormsModule],
	viewProviders: [dynamicFormControlProvider],
})
export class DynamicFormGroupComponent extends DynamicFormControlBase {
	@HostBinding('class') public override hostClass = 'form-field-group';

	public readonly comparator = DynamicFormHelper.comparator;

  protected override readonly formControl = new FormGroup({});
}
