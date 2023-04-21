import { Directive, HostBinding, inject } from '@angular/core';
import { DYNAMIC_FORM_CONTROL_DATA } from '../tokens/dynamic-form-control-data.token';

@Directive()
export class DynamicFormControlBase {
  @HostBinding('class') public hostClass = 'form-field';

	public readonly data = inject(DYNAMIC_FORM_CONTROL_DATA);
}
