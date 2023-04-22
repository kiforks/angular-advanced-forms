import { inject, Pipe, PipeTransform } from '@angular/core';
import { VALIDATION_ERROR_MESSAGES } from '../../tokens/validation-error-message.token';

@Pipe({
	name: 'validationErrorMessage',
	standalone: true,
})
export class ValidationErrorMessagePipe implements PipeTransform {
	private readonly errorMessages = inject(VALIDATION_ERROR_MESSAGES);

	public transform(key: string, value: unknown): string {
		if (!this.errorMessages[key]) {
			console.warn(`Missing message for ${key} validator...`);

			return '';
		}

		return this.errorMessages[key](value);
	}
}
