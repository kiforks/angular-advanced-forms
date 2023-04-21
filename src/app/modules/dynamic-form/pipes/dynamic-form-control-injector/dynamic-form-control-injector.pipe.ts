import { Injector, Pipe, PipeTransform } from '@angular/core';
import { DynamicFormControl } from '../../interfaces/dynamic-form';
import { DYNAMIC_FORM_CONTROL_DATA } from '../../tokens/dynamic-form-control-data.token';

@Pipe({
	name: 'dynamicFormControlInjector',
	standalone: true,
})
export class DynamicFormControlInjectorPipe implements PipeTransform {
	public transform(controlKey: string, config: DynamicFormControl): Injector {
		return Injector.create({
			providers: [
				{
					provide: DYNAMIC_FORM_CONTROL_DATA,
					useValue: { controlKey, config },
				},
			],
		});
	}
}
