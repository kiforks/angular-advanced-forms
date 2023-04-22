import { Component } from '@angular/core';

/** Classes */
import { DynamicFormControlBase } from '../../classes/dynamic-form-control-base';

/** Providers */
import { dynamicFormControlDeps, dynamicFormControlProvider } from '../../providers/dynamic-form-control.provider';

/** Directives */
import { ValidationErrorViewContainerDirective } from '../../../../core/modules/validation/directives/validation-error-view-container/validation-error-view-container.directive';

@Component({
	selector: 'dynamic-form-checkbox',
	template: `
		<div class="form-checkbox">
			<input
				type="checkbox"
				[errorViewContainerRef]="container.viewContainerRef"
				[formControlName]="data.key"
				[checked]="data.control.value"
				[id]="data.key"
			/>
			<label [for]="data.key">{{ data.control.label }}</label>
		</div>

		<ng-container validationErrorViewContainer #container="validationErrorViewContainer"></ng-container>
	`,
	styles: [
		`
			:host {
				display: grid;
				margin-top: 10px;
				justify-content: start;
			}

			.form-checkbox {
				display: flex;
				align-items: center;
			}
		`,
	],
	standalone: true,
	imports: [dynamicFormControlDeps, ValidationErrorViewContainerDirective],
	viewProviders: [dynamicFormControlProvider],
})
export class DynamicFormCheckboxComponent extends DynamicFormControlBase {}
