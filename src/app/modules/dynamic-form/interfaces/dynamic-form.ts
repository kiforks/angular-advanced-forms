import { ValidatorFn, Validators } from '@angular/forms';
import { Type } from '@angular/core';

export type DynamicFormCustomValidators = { banWords: ValidatorFn };
export type DynamicFormValidatorKeys = keyof Omit<typeof Validators & DynamicFormCustomValidators, 'prototype' | 'compose' | 'composeAsync'>;

export type DynamicFormControlsMap = {
	[T in DynamicFormControl['controlType']]: Type<any>;
};

export type DynamicFormControlType = 'input' | 'select';

export interface DynamicFormOptions {
	label: string;
	value: string;
}

export interface DynamicFormControl<T = string> {
	controlType: DynamicFormControlType;
	type?: string;
	label: string;
	value: T | null;
	options?: DynamicFormOptions[];
	validators?: {
		[key in DynamicFormValidatorKeys]?: unknown;
	};
}
export interface DynamicFormConfig {
	description: string;
	controls: {
		[key: string]: DynamicFormControl;
	};
}
