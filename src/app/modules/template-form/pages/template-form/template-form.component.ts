import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

/** Interfaces */
import { User } from '../../../../core/interfaces/user';

/** Directives */
import { TemplateFormPasswordMatchValidatorDirective } from '../../validators/directives/template-form-password-match-validator/template-form-password-match-validator.directive';
import { TemplateFormUniqueNicknameValidatorDirective } from '../../validators/directives/template-form-unique-nickname-validator/template-form-unique-nickname-validator.directive';
import { ValidationErrorMessageDirective } from '../../../../core/modules/validation/directives/validation-error-message/validation-error-message.directive';
import { TemplateFormBanWordValidatorDirective } from '../../validators/directives/template-form-ban-word-validator/template-form-ban-word-validator.directive';

@Component({
	selector: 'template-form',
	standalone: true,
	imports: [
		CommonModule,
		FormsModule,
		TemplateFormPasswordMatchValidatorDirective,
		TemplateFormPasswordMatchValidatorDirective,
		TemplateFormUniqueNicknameValidatorDirective,
		ValidationErrorMessageDirective,
		TemplateFormBanWordValidatorDirective,
	],
	templateUrl: './template-form.component.html',
	styleUrls: ['../../../../../assets/scss/common-page.scss', '../../../../../assets/scss/common-form.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateFormComponent implements AfterViewInit {
	@ViewChild(NgForm) private readonly form!: NgForm;

	public readonly userInfo: User = {
		firstName: '',
		lastName: '',
		nickname: 'kifor.kostya',
		email: 'k.kifor@tenantcloud.com',
		yearOfBirth: 1996,
		passport: '',
		fullAddress: '',
		city: 'Ivano-Frankivsk',
		postCode: 123456,
		password: '123456',
		confirmPassword: '123456',
	};

	private initialFormValues!: unknown;

	public get isAdult() {
		const currentYear = new Date().getFullYear();

		return currentYear - this.userInfo.yearOfBirth >= 18;
	}

	public get years() {
		const now = new Date().getUTCFullYear();

		return Array(now - (now - 40))
			.fill('')
			.map((_, idx) => now - idx);
	}

	public ngAfterViewInit(): void {
		queueMicrotask(() => {
			this.initialFormValues = this.form.value;
		});
	}

	public onSubmitForm(form: any, e: SubmitEvent) {
		if (this.form.invalid) return;
		console.log(e);
		console.log(form.form.controls);

		// Strategy 1 - Reset form values, validation statuses, making controls untouched, pristine, etc
		this.form.resetForm();
	}

	public onReset(e: Event) {
		e.preventDefault();

		this.form.resetForm();
	}

	public onResetInitialClick(e: Event) {
		e.preventDefault();

		// Strategy 2 - Reset only control statuses but not values.
		this.form.resetForm(this.initialFormValues);
	}
}
