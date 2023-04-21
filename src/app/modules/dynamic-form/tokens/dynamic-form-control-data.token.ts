import { InjectionToken } from '@angular/core';
import { DynamicFormControl } from '../interfaces/dynamic-form';

export interface DynamicFormControlData {
	controlKey: string;
	config: DynamicFormControl;
}

export const DYNAMIC_FORM_CONTROL_DATA = new InjectionToken<DynamicFormControlData>('DYNAMIC_FORM_CONTROL_DATA');
