import { Directive, inject, Injector, Input, OnChanges, ViewContainerRef } from '@angular/core';
import { DynamicFormControlData } from '../../interfaces/dynamic-form.interface';
import { DynamicFormInputComponent } from '../../components/dynamic-form-input/dynamic-form-input.component';
import { DynamicFormSelectComponent } from '../../components/dynamic-form-select/dynamic-form-select.component';
import { DYNAMIC_FORM_CONTROL_DATA } from '../../tokens/dynamic-form-control-data.token';
import { DynamicFormControlComponents } from '../../interfaces/dynamic-form-control.interface';
import { DynamicFormCheckboxComponent } from '../../components/dynamic-form-checkbox/dynamic-form-checkbox.component';
import { DynamicFormGroupComponent } from '../../components/dynamic-form-group/dynamic-form-group.component';

@Directive({
	selector: '[dynamicFormControl]',
	standalone: true,
})
export class DynamicFormControlDirective implements OnChanges {
	@Input('dynamicFormControl') public data!: DynamicFormControlData;

	private readonly injector = inject(Injector);

	private readonly controlComponents: DynamicFormControlComponents = {
		input: DynamicFormInputComponent,
		select: DynamicFormSelectComponent,
		checkbox: DynamicFormCheckboxComponent,
		group: DynamicFormGroupComponent,
	};

	constructor(private readonly viewContainerRef: ViewContainerRef) {}

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

    this.viewContainerRef.createComponent(this.controlComponents[control.controlType], { injector });
	}
}
