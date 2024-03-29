import { InjectionToken } from '@angular/core';

/** Interfaces */
import { DynamicFormControlData } from '../interfaces/dynamic-form.interface';

export const DYNAMIC_FORM_CONTROL_DATA = new InjectionToken<DynamicFormControlData>('DYNAMIC_FORM_CONTROL_DATA');
