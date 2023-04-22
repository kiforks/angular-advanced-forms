import { Type } from '@angular/core';

/** Interfaces */
import { DynamicFormOptions } from './dynamic-form-options.interface';
import { DynamicFormValidatorKeys } from './dynamic-form.interface';

export type DynamicFormControls = Record<string, DynamicFormControl>;
export type DynamicFormControlLazyComponents = Record<DynamicFormControlType, () => Promise<Type<any>>>;
export type DynamicFormControlValidators = Record<DynamicFormValidatorKeys, unknown>;

export interface DynamicFormControl<T extends string = string> {
	controlType: DynamicFormControlType;
	type?: string;
	order: number;
	label: string;
	value: T | null;
	options?: DynamicFormOptions[];
	controls?: DynamicFormControls;
	validators?: DynamicFormControlValidators | {};
}

export type DynamicFormControlType = 'input' | 'select' | 'checkbox' | 'group';
