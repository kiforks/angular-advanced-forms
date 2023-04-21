import { Type } from '@angular/core';
import { DynamicFormOptions } from './dynamic-form-options.interface';
import { DynamicFormValidatorKeys } from './dynamic-form.interface';

export type DynamicFormControls = {
	[key: string]: DynamicFormControl;
};

export interface DynamicFormControl<T = string> {
	controlType: DynamicFormControlType;
	type?: string;
	label: string;
	value: T | null;
	options?: DynamicFormOptions[];
  controls?: DynamicFormControls;
	validators?: {
		[key in DynamicFormValidatorKeys]?: unknown;
	};
}

export type DynamicFormControlComponents = {
	[T in DynamicFormControlType]: Type<any>;
};

export type DynamicFormControlType = 'input' | 'select' | 'checkbox' | 'group';
