import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		title: 'Template-Driven Forms Playground',
		loadComponent: () =>
			import('./modules/template-forms/pages/template-forms/template-forms.component').then(
				m => m.TemplateFormsComponent
			),
	},
	{
		path: 'reactive-forms',
		title: 'Reactive Forms Playground',
		loadComponent: () =>
			import('./modules/reactive-forms/pages/reactive-forms/reactive-forms.component').then(
				m => m.ReactiveFormsComponent
			),
	},
	{
		path: 'dynamic-forms',
		title: 'Dynamic Forms Playground',
		loadComponent: () =>
			import('./modules/dynamic-form/pages/dynamic-form/dynamic-form.component').then(
				m => m.DynamicFormComponent
			),
	},
	{
		path: 'custom-rating-picker',
		title: 'Custom Rating Picker Playground',
		loadComponent: () =>
			import('./modules/rating-picker/pages/rating-picker-layout/rating-picker-layout.component').then(
				m => m.RatingPickerLayoutComponent
			),
	},
	{
		path: 'custom-select',
		title: 'Custom Select Component Playground (Advanced)',
		loadComponent: () =>
			import('./modules/select/pages/select-layout/select-layout.component').then(m => m.SelectLayout),
	},
];
