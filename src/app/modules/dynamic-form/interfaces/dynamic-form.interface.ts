import { ValidatorFn, Validators } from '@angular/forms';
import { DynamicFormControl, DynamicFormControls } from './dynamic-form-control.interface';

export type DynamicFormValidatorKeys = keyof Omit<
	typeof Validators & DynamicFormCustomValidators,
	'prototype' | 'compose' | 'composeAsync'
>;

export interface DynamicFormCustomValidators {
	banWords: ValidatorFn;
}

export interface DynamicFormControlData {
	control: DynamicFormControl;
	key: string;
}

export interface DynamicFormConfig {
	description: string;
	controls: DynamicFormControls;
}
