import { inject, StaticProvider } from '@angular/core';

/** Forms */
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';

/** Modules */
import { CommonModule } from '@angular/common';

/** Directives */
import { ValidationErrorMessageDirective } from '../../../core/modules/validation/directives/validation-error-message/validation-error-message.directive';

export const dynamicFormControlProvider: StaticProvider = {
	provide: ControlContainer,
	useFactory: () => inject(ControlContainer, { skipSelf: true }),
};

export const dynamicFormControlDeps = [CommonModule, ReactiveFormsModule, ValidationErrorMessageDirective];
