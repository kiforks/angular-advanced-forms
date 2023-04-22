import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

/** RxJS */
import { map, Observable, Subject, switchMap, tap } from 'rxjs';

/** Modules */
import { CommonModule } from '@angular/common';

/** HTTP */
import { HttpClient } from '@angular/common/http';

/** Forms */
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

/** Interfaces */
import { DynamicFormConfig } from '../../interfaces/dynamic-form.interface';

/** Directives */
import { DynamicFormControlDirective } from '../../directives/dynamic-form-control/dynamic-form-control.directive';

/** Helpers */
import { DynamicFormHelper } from '../../helpers/dynamic-form.helper';

@Component({
	selector: 'dynamic-forms',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, DynamicFormControlDirective],
	templateUrl: './dynamic-form.component.html',
	styleUrls: ['../../../../../assets/scss/common-page.scss', './dynamic-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormComponent implements OnInit {
	public form!: FormGroup;

	public formConfig$!: Observable<{ form: FormGroup; config: DynamicFormConfig }>;

	public readonly comparator = DynamicFormHelper.comparator;

	private readonly formLoadingTrigger = new Subject<'user' | 'company'>();

	constructor(private readonly httpClient: HttpClient) {}

	public ngOnInit(): void {
		this.formConfig$ = this.formLoadingTrigger.pipe(
			switchMap(config => this.httpClient.get<DynamicFormConfig>(`assets/json/${config}.form.json`)),
			map(config => ({
				config,
				form: new FormGroup({}),
			}))
		);
	}

	public onLoadUserClick(): void {
		this.formLoadingTrigger.next('user');
	}

	public onLoadCompanyClick(): void {
		this.formLoadingTrigger.next('company');
	}

	public onSubmit(form: FormGroup) {
		console.log('Submitted data: ', form.value);
		form.reset();
	}
}
