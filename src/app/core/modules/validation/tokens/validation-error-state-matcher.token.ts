import { InjectionToken } from '@angular/core';

/** Interfaces */
import { ValidationErrorStateMatcher } from '../interfaces/validation-error-state-matcher.interface';

export const VALIDATION_ERROR_STATE_MATCHER = new InjectionToken<ValidationErrorStateMatcher>(
	'Validation error state matcher'
);
