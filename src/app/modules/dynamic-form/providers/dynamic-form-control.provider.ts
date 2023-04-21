import { inject, StaticProvider } from '@angular/core';
import { ControlContainer } from '@angular/forms';

export const dynamicFormControlProvider: StaticProvider = {
	provide: ControlContainer,
	useFactory: () => inject(ControlContainer, { skipSelf: true }),
};
