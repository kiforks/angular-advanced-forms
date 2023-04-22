/** Interfaces */
import { KeyValue } from '@angular/common';
import { DynamicFormControl } from '../interfaces/dynamic-form-control.interface';

export abstract class DynamicFormHelper {
	public static comparator(a: KeyValue<string, DynamicFormControl>, b: KeyValue<string, DynamicFormControl>): number {
		return a.value.order - b.value.order;
	}
}
