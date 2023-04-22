import {
	ComponentRef,
	Directive,
	ElementRef,
	inject,
	OnDestroy,
	OnInit,
	Optional,
	ViewContainerRef,
} from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective, NgControl, NgForm, NgModel } from '@angular/forms';
import { EMPTY, fromEvent, merge, Observable, skip, startWith, Subscription } from 'rxjs';
import { ValidationControlErrorComponent } from '../../components/validation-control-error/validation-control-error.component';
import { DynamicFormGroupComponent } from '../../../../../modules/dynamic-form/components/dynamic-form-group/dynamic-form-group.component';
import { VALIDATION_ERROR_STATE_MATCHER } from '../../tokens/validation-error-state-matcher.token';
import { ValidationErrorStateMatcher } from '../../interfaces/validation-error-state-matcher.interface';

@Directive({
	selector: '[ngModel],[formControl],[formControlName]',
	standalone: true,
})
export class ValidationErrorMessageDirective implements OnInit, OnDestroy, ValidationErrorStateMatcher {
	private readonly ngControl = inject(NgControl, { self: true });
	private readonly errorStateMatcher: ValidationErrorStateMatcher =
		inject(VALIDATION_ERROR_STATE_MATCHER, { optional: true }) || this;

	private componentRef: ComponentRef<ValidationControlErrorComponent> | null = null;
	private errorMessageTrigger!: Subscription;

	constructor(
		@Optional() private readonly controlContainer: ControlContainer,
		private readonly viewContainerRef: ViewContainerRef,
		private readonly elementRef: ElementRef,
	) {}

	public ngOnInit(): void {
		this.setData();
  }

	public ngOnDestroy(): void {
		this.errorMessageTrigger.unsubscribe();
	}

	public get form(): NgForm | DynamicFormGroupComponent | null {
		return this.controlContainer?.formDirective as NgForm | DynamicFormGroupComponent | null;
	}

	private renderComponent(): void {
		if (!this.componentRef) {
			this.componentRef = this.viewContainerRef.createComponent(ValidationControlErrorComponent);

			this.componentRef.changeDetectorRef.markForCheck();
		}

		this.componentRef.setInput('errors', this.ngControl.errors);
	}

	private destroyComponent(): void {
		this.componentRef?.destroy();
		this.componentRef = null;
	}

	private setData(): void {
		if (!this.ngControl.control) throw Error(`No control model for ${this.ngControl.name} control...`);

		const statusChanges$ = this.ngControl.control!.statusChanges;
		const blurEvent$ = fromEvent(this.elementRef.nativeElement, 'blur');
		const formSubmit$: Observable<unknown> = !!this.form ? (this.form as NgForm).ngSubmit : EMPTY;
		const errorMessageTrigger$ = merge(statusChanges$, blurEvent$, formSubmit$);

		this.errorMessageTrigger = errorMessageTrigger$
			.pipe(startWith(this.ngControl.control.status), skip(this.ngControl instanceof NgModel ? 1 : 0))
			.subscribe(() => this.checkErrors());
	}

	private checkErrors(): void {
    const isErrorVisible = this.errorStateMatcher.isErrorVisible(this.ngControl.control, this.form as NgForm);

    isErrorVisible ? this.renderComponent() : this.destroyComponent();
	}

	public isErrorVisible(control: AbstractControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return Boolean(control && control.invalid && (control.dirty || (form && form.submitted)));
	}
}
