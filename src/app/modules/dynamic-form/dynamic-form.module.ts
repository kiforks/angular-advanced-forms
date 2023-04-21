import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormCheckboxComponent } from './components/dynamic-form-checkbox/dynamic-form-checkbox.component';
import { DynamicFormGroupComponent } from './components/dynamic-form-group/dynamic-form-group.component';
import { DynamicFormInputComponent } from './components/dynamic-form-input/dynamic-form-input.component';
import { DynamicFormSelectComponent } from './components/dynamic-form-select/dynamic-form-select.component';
import { DynamicFormControlDirective } from './directives/dynamic-form-control/dynamic-form-control.directive';

const components = [
	DynamicFormCheckboxComponent,
	DynamicFormGroupComponent,
	DynamicFormInputComponent,
	DynamicFormSelectComponent,
];

const directives = [DynamicFormControlDirective];

@NgModule({
	imports: [components, directives],
	exports: [components, directives],
})
export class DynamicFormModule {}
