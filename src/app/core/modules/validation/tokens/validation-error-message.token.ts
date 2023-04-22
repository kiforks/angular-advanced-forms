import { InjectionToken } from '@angular/core';

/** Configs */
import { ValidationErrorConfig } from '../configs/validation-error.config';

export const VALIDATION_ERROR_MESSAGES = new InjectionToken(`Validation Messages`, {
	providedIn: 'root',
	factory: () => ValidationErrorConfig.messages,
});
