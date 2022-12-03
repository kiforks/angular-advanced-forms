import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

/** Interfaces */
import { UserInfo } from '../../../../../core/interfaces/user-info';

/** Directives */
import { BanWordsDirective } from '../../directives/validators/ban-words.directive';
import { PasswordShouldMatchDirective } from '../../directives/validators/password-should-match.directive';
import { UniqueNicknameDirective } from '../../directives/validators/unique-nickname.directive';

@Component({
	selector: 'app-template-forms-page',
	standalone: true,
	imports: [CommonModule, FormsModule, BanWordsDirective, PasswordShouldMatchDirective, UniqueNicknameDirective],
	templateUrl: './template-forms-page.component.html',
	styleUrls: ['../../../../scss/common-page.scss', '../../../../scss/common-form.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateFormsPageComponent implements AfterViewInit {
	@ViewChild(NgForm) public formDir!: NgForm;

	public userInfo: UserInfo = {
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
			this.initialFormValues = this.formDir.value;
		});
	}

	public onSubmitForm(form: any, e: SubmitEvent) {
		console.log(e);
		console.log(form.form.controls);

		// Strategy 1 - Reset form values, validation statuses, making controls untouched, pristine, etc
		this.formDir.resetForm();
	}

	public onReset(e: Event) {
		e.preventDefault();

		this.formDir.resetForm();
	}

	public onResetInitialClick(e: Event) {
		e.preventDefault();

		// Strategy 2 - Reset only control statuses but not values.
		this.formDir.resetForm(this.initialFormValues);
	}
}
