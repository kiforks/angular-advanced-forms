import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule, KeyValue } from '@angular/common';
import { ValidationErrors } from '@angular/forms';
import { VALIDATION_ERROR_MESSAGES } from '../../tokens/validation-error-message.token';
import { ValidationErrorMessagePipe } from '../../pipes/validation-error-message/validation-error-message.pipe';

@Component({
	selector: 'validation-input-error',
	standalone: true,
	imports: [CommonModule, ValidationErrorMessagePipe],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<ng-container *ngFor="let error of errors | keyvalue; trackBy: trackByFn">
			{{ error.key | validationErrorMessage : error.value }}
		</ng-container>
	`,
	styles: [
		`
			:host {
				display: block;
			}
		`,
	],
	host: { class: 'input-error' },
})
export class ValidationControlErrorComponent {
	@Input() public errors: ValidationErrors | undefined | null = null;

	public readonly errorsMap = inject(VALIDATION_ERROR_MESSAGES);

	public trackByFn(index: number, { key }: KeyValue<string, unknown>) {
		return key;
	}
}
