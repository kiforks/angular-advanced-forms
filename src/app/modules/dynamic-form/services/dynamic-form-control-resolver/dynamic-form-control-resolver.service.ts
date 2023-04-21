import { Injectable, Type } from '@angular/core';
import { DynamicFormInputComponent } from '../../components/dynamic-form-input/dynamic-form-input.component';
import { DynamicFormControlType, DynamicFormControlsMap } from '../../interfaces/dynamic-form';
import { DynamicFormSelectComponent } from '../../components/dynamic-form-select/dynamic-form-select.component';

@Injectable({
	providedIn: 'root',
})
export class DynamicFormControlResolverService {
	private readonly controlComponents: DynamicFormControlsMap = {
		input: DynamicFormInputComponent,
		select: DynamicFormSelectComponent,
	};

	public resolve(controlType: DynamicFormControlType): Type<any> {
		return this.controlComponents[controlType];
	}
}
