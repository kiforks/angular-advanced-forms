import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import '@polymer/paper-input/paper-textarea';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EditableContentValueAccessor } from '../value-accessor/editable-content.directive';

import { Subscription } from 'rxjs';
import { RatingOptions, RatingPickerComponent } from '../../../../components/rating-picker/rating-picker.component';

interface Rating {
	reviewText: string;
	reviewRating: RatingOptions;
}

@Component({
	selector: 'app-rating-picker-page',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, EditableContentValueAccessor, RatingPickerComponent],
	templateUrl: './rating-picker-page.component.html',
	styleUrls: ['../../../scss/common-page.scss', './rating-picker-page.component.scss'],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingPickerPageComponent implements OnInit, OnDestroy {
	private sub!: Subscription;

	form = this.fb.group<Rating>({
		reviewText: '',
		reviewRating: null,
	});

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.sub = this.form.valueChanges.subscribe(console.log);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	onSubmit() {
		console.log(this.form.value);
		this.form.reset();
	}
}
