import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DYNAMIC_FORM_CONTROL_DATA } from '../../tokens/dynamic-form-control-data.token';

@Component({
	selector: 'dynamic-form-select',
	template: `
		<select [id]="control.controlKey" [value]="control.config.value">
			<option *ngFor="let option of control.config.options" [value]="option.value">{{ option.label }}</option>
		</select>
	`,
	standalone: true,
	imports: [CommonModule],
})
export class DynamicFormSelectComponent {
	public readonly control = inject(DYNAMIC_FORM_CONTROL_DATA);
}
