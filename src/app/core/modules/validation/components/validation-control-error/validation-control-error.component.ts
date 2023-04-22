import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';

/** Modules */
import { CommonModule, KeyValue } from '@angular/common';

/** Forms */
import { ValidationErrors } from '@angular/forms';

/** Pipes */
import { ValidationErrorMessagePipe } from '../../pipes/validation-error-message/validation-error-message.pipe';

@Component({
	selector: 'validation-input-error',
	standalone: true,
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
	imports: [CommonModule, ValidationErrorMessagePipe],
	host: { class: 'input-error' },
})
export class ValidationControlErrorComponent {
	@Input() public errors: ValidationErrors | undefined | null = null;

	public trackByFn(index: number, { key }: KeyValue<string, unknown>) {
		return key;
	}
}
