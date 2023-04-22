import { ChangeDetectorRef, Directive, inject, Injector, Input, OnChanges, ViewContainerRef } from '@angular/core';

/** Interfaces */
import { DynamicFormControlData } from '../../interfaces/dynamic-form.interface';
import { DynamicFormControlLazyComponents } from '../../interfaces/dynamic-form-control.interface';

/** Tokens */
import { DYNAMIC_FORM_CONTROL_DATA } from '../../tokens/dynamic-form-control-data.token';

@Directive({
	selector: '[dynamicFormControl]',
	standalone: true,
})
export class DynamicFormControlDirective implements OnChanges {
	@Input('dynamicFormControl') public data!: DynamicFormControlData;

	private readonly injector = inject(Injector);

	private readonly controlLazyComponents: DynamicFormControlLazyComponents = {
		input: () =>
			import('../../components/dynamic-form-input/dynamic-form-input.component').then(
				c => c.DynamicFormInputComponent
			),
		select: () =>
			import('../../components/dynamic-form-select/dynamic-form-select.component').then(
				c => c.DynamicFormSelectComponent
			),
		checkbox: () =>
			import('../../components/dynamic-form-checkbox/dynamic-form-checkbox.component').then(
				c => c.DynamicFormCheckboxComponent
			),
		group: () =>
			import('../../components/dynamic-form-group/dynamic-form-group.component').then(
				c => c.DynamicFormGroupComponent
			),
	};

	constructor(private readonly viewContainerRef: ViewContainerRef, private readonly cdr: ChangeDetectorRef) {}

	public ngOnChanges(): void {
		const { control, key } = this.data;

		const data: DynamicFormControlData = { control, key };

		const injector = Injector.create({
			parent: this.injector,
			providers: [
				{
					provide: DYNAMIC_FORM_CONTROL_DATA,
					useValue: data,
				},
			],
		});

		this.controlLazyComponents[control.controlType]().then(component => {
			this.viewContainerRef.createComponent(component, {
				injector,
			});

			this.cdr.detectChanges();
		});
	}
}
