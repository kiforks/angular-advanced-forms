import { Directive, HostBinding, inject } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { DYNAMIC_FORM_CONTROL_DATA } from '../tokens/dynamic-form-control-data.token';

@Directive()
export class DynamicFormControlBase {
  @HostBinding('class') public hostClass = 'form-field';

	public readonly data = inject(DYNAMIC_FORM_CONTROL_DATA);

	private readonly parentFormGroup = inject(ControlContainer);

	public get formGroup(): FormGroup {
		return this.parentFormGroup.control as FormGroup;
	}
}
