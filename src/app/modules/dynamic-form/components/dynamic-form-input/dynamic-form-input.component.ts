import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DYNAMIC_FORM_CONTROL_DATA } from '../../tokens/dynamic-form-control-data.token';

@Component({
	selector: 'dynamic-form-input',
	template: `
		<input [value]="control.config.value" [id]="control.controlKey" [type]="control.config.type" />
	`,
	standalone: true,
	imports: [CommonModule],
})
export class DynamicFormInputComponent {
	public readonly control = inject(DYNAMIC_FORM_CONTROL_DATA);
}
