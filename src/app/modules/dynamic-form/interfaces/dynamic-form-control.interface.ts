import { Type } from '@angular/core';
import { DynamicFormOptions } from './dynamic-form-options.interface';
import { DynamicFormValidatorKeys } from './dynamic-form.interface';

export type DynamicFormControls = {
	[key: string]: DynamicFormControl;
};

export interface DynamicFormControl<T = string> {
	controlType: DynamicFormControlType;
	type?: string;
	order: number;
	label: string;
	value: T | null;
	options?: DynamicFormOptions[];
	controls?: DynamicFormControls;
	validators?: {
		[key in DynamicFormValidatorKeys]?: unknown;
	};
}

export type DynamicFormControlLazyComponents = {
	[T in DynamicFormControlType]: () => Promise<Type<any>>;
};

export type DynamicFormControlType = 'input' | 'select' | 'checkbox' | 'group';
