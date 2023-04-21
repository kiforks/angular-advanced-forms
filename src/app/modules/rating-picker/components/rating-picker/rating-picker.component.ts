import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	HostBinding,
	HostListener,
	Input,
	OnChanges,
	Output,
	SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RatingOptions } from '../../interfaces/rating-picker.interface';

@Component({
	selector: 'rating-picker',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './rating-picker.component.html',
	styleUrls: ['./rating-picker.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: RatingPickerComponent,
			multi: true,
		},
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingPickerComponent implements OnChanges, ControlValueAccessor {
	@Input() public value: RatingOptions = null;
	@Input() public disabled = false;

	@Input() @HostBinding('attr.tabIndex') public tabIndex = 0;

	@Output() public readonly change = new EventEmitter<RatingOptions>();

	private onChange: (newValue: RatingOptions) => void = () => {};
	private onTouch: () => void = () => {};

	constructor(private readonly cdr: ChangeDetectorRef) {}

	public ngOnChanges(changes: SimpleChanges): void {
		if (changes['value']) this.onChange(changes['value'].currentValue);
	}

	@HostListener('blur') public onBlur() {
		this.onTouch();
	}

	public writeValue(obj: RatingOptions): void {
		this.value = obj;
		this.cdr.markForCheck();
	}

	public registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: any): void {
		this.onTouch = fn;
	}

	public setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled;
		this.cdr.markForCheck();
	}

	public onRateClick(value: RatingOptions) {
		if (this.disabled) return;

		this.value = value;
		this.onChange(this.value);
		this.onTouch();
		this.change.emit(this.value);
	}
}
