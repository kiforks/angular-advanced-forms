import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

/** Interfaces */
import { User } from '../../../../core/interfaces/user';

/** Directives */
import { BanWordsDirective } from '../../validators/ban-words.directive';
import { PasswordShouldMatchDirective } from '../../validators/password-should-match.directive';
import { UniqueNicknameDirective } from '../../validators/unique-nickname.directive';

@Component({
	selector: 'app-template-forms-page',
	standalone: true,
	imports: [CommonModule, FormsModule, BanWordsDirective, PasswordShouldMatchDirective, UniqueNicknameDirective],
	templateUrl: './template-forms.component.html',
	styleUrls: ['../../../../../assets/scss/common-page.scss', '../../../../../assets/scss/common-form.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateFormsComponent implements AfterViewInit {
	@ViewChild(NgForm) private readonly form!: NgForm;

	public readonly userInfo: User = {
		firstName: 'Kostya',
		lastName: 'Kifor',
		nickname: 'kifor.kostya',
		email: 'k.kifor@tenantcloud.com',
		yearOfBirth: 1996,
		passport: 'AB123456',
		fullAddress: 'Some street',
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
