import { InjectionToken } from '@angular/core';
import { ValidationViewContainerRef } from '../interfaces/validation-view-container-ref.interface';

export const VALIDATION_VIEW_CONTAINER_REF = new InjectionToken<ValidationViewContainerRef>(
	'Validation view container ref'
);
