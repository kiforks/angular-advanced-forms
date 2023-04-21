import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import '@polymer/paper-input/paper-textarea';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EditableContentValueAccessor } from '../../directives/editable-content.directive';

import { Subscription } from 'rxjs';
import { RatingPickerComponent } from '../../components/rating-picker/rating-picker.component';
import { Rating } from '../../interfaces/rating-picker.interface';

@Component({
	selector: 'rating-picker-layout',
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, EditableContentValueAccessor, RatingPickerComponent],
	templateUrl: './rating-picker-layout.component.html',
	styleUrls: ['../../../../../assets/scss/common-page.scss', './rating-picker-layout.component.scss'],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingPickerLayoutComponent implements OnInit, OnDestroy {
	private sub!: Subscription;

	public readonly form = this.fb.group<Rating>({
		reviewText: '',
		reviewRating: null,
	});

	constructor(private fb: FormBuilder) {}

	public ngOnInit(): void {
		this.sub = this.form.valueChanges.subscribe(console.log);
	}

	public ngOnDestroy(): void {
		this.sub.unsubscribe();
	}

	public onSubmit(): void {
		console.log(this.form.value);

		this.form.reset();
	}
}
