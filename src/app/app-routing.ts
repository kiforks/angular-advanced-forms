import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		title: 'Template-Driven Forms Playground',
		loadComponent: () =>
			import(
				'./modules/template-forms/pages/template-forms-page/template-forms-page.component'
			).then(m => m.TemplateFormsPageComponent),
	},
	{
		path: 'reactive-forms',
		title: 'Reactive Forms Playground',
		loadComponent: () =>
			import(
				'./modules/reactive-forms/pages/reactive-forms-page/reactive-forms-page.component'
			).then(m => m.ReactiveFormsPageComponent),
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
			import('./modules/select/pages/select-layout/select-layout.component').then(
				m => m.SelectLayout
			),
	},
];
