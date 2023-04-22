import { ComponentRef, Directive, ElementRef, inject, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';

/** Forms */
import { AbstractControl, ControlContainer, FormGroupDirective, NgControl, NgForm, NgModel } from '@angular/forms';

/** RxJS */
import { EMPTY, fromEvent, merge, Observable, skip, startWith, Subscription } from 'rxjs';

/** Components */
import { ValidationControlErrorComponent } from '../../components/validation-control-error/validation-control-error.component';
import { DynamicFormGroupComponent } from '../../../../../modules/dynamic-form/components/dynamic-form-group/dynamic-form-group.component';

/** Tokens */
import { VALIDATION_ERROR_STATE_MATCHER } from '../../tokens/validation-error-state-matcher.token';

/** Interfaces */
import { ValidationErrorStateMatcher } from '../../interfaces/validation-error-state-matcher.interface';

@Directive({
	selector: `
    [ngModel]:not([validationNoErrors]),
    [formControl]:not([validationNoErrors]),
    [formControlName]:not([validationNoErrors]),
    [formGroupName]:not([validationNoErrors]),
    [ngModelGroup]:not([validationNoErrors])
  `,
	standalone: true,
})
export class ValidationErrorMessageDirective implements OnInit, OnDestroy, ValidationErrorStateMatcher {
	@Input() public errorViewContainerRef: ViewContainerRef = inject(ViewContainerRef);

	private readonly ngControl = inject(NgControl, { self: true, optional: true });
	private readonly hostFormGroup = inject(ControlContainer, { self: true, optional: true });
	private readonly parentFormGroup = inject(ControlContainer, { skipSelf: true, optional: true });
	private readonly errorStateMatcher: ValidationErrorStateMatcher =
		inject(VALIDATION_ERROR_STATE_MATCHER, { optional: true }) || this;

	private readonly control: NgControl | ControlContainer = this.ngControl || (this.hostFormGroup as ControlContainer);

	private componentRef: ComponentRef<ValidationControlErrorComponent> | null = null;
	private errorMessageTrigger!: Subscription;

	constructor(private readonly elementRef: ElementRef) {}

	public ngOnInit(): void {
		queueMicrotask(() => this.setData()); // for ngModelGroup
	}

	public ngOnDestroy(): void {
		this.errorMessageTrigger.unsubscribe();
	}

	public get form(): NgForm | DynamicFormGroupComponent | null {
		return this.parentFormGroup?.formDirective as NgForm | DynamicFormGroupComponent | null;
	}

	private renderComponent(): void {
		if (!this.componentRef) {
			this.componentRef = this.errorViewContainerRef.createComponent(ValidationControlErrorComponent);

			this.componentRef.changeDetectorRef.markForCheck();
		}

		this.componentRef.setInput('errors', this.control.errors);
	}

	private destroyComponent(): void {
		this.componentRef?.destroy();
		this.componentRef = null;
	}

	private setData(): void {
		if (!this.control.control) throw Error(`No control model for ${this.control.name} control...`);

		const { control } = this.control;

		const statusChanges$ = control!.statusChanges;
		const blurEvent$ = fromEvent(this.elementRef.nativeElement, 'blur');
		const formSubmit$: Observable<unknown> = !!this.form ? (this.form as NgForm).ngSubmit : EMPTY;
		const errorMessageTrigger$ = merge(statusChanges$, blurEvent$, formSubmit$);

		this.errorMessageTrigger = errorMessageTrigger$
			.pipe(startWith(control.status), skip(this.control instanceof NgModel ? 1 : 0))
			.subscribe(() => this.checkErrors());
	}

	private checkErrors(): void {
		const isErrorVisible = this.errorStateMatcher.isErrorVisible(this.control.control, this.form as NgForm);

		isErrorVisible ? this.renderComponent() : this.destroyComponent();
	}

	public isErrorVisible(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return Boolean(control && control.invalid && (control.dirty || (form && form.submitted)));
	}
}
