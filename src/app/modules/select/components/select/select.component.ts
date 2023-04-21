import {
	AfterContentInit,
	Attribute,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ContentChildren,
	ElementRef,
	EventEmitter,
	HostBinding,
	HostListener,
	Input,
	OnChanges,
	OnDestroy,
	Output,
	QueryList,
	SimpleChanges,
	ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/** Animations */
import { AnimationEvent } from '@angular/animations';
import { dropDownAnimation } from '../../animations/drop-down.animation';

/** CDK */
import { SelectionModel } from '@angular/cdk/collections';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';

/** RxJS */
import { merge, startWith, Subject, switchMap, takeUntil, tap } from 'rxjs';

/** Components */
import { OptionComponent } from '../option/option.component';

/** Interfaces */
import { SelectValue } from '../../interfaces/select.interface';

@Component({
	selector: 'cfc-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss'],
	animations: [dropDownAnimation],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: SelectComponent,
			multi: true,
		},
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent<T> implements OnChanges, AfterContentInit, OnDestroy, ControlValueAccessor {
	@Input() public label = '';
	@Input() public searchable = false;
	@Input() public displayWith: ((value: T) => string | number) | null = null;
	@Input() public compareWith: (value1: T | null, value2: T | null) => boolean = (value1, value2) =>
		value1 === value2;

	@Input() @HostBinding('class.disabled') public disabled = false;
	@Input() @HostBinding('attr.tabIndex') public tabIndex = 0;

	@Input() public set value(value: SelectValue<T>) {
		this.setupValue(value);
		this.onChange(this.value);
		this.highlightSelectedOptions();
	}

	@Output() public readonly opened = new EventEmitter<void>();
	@Output() public readonly selectionChanged = new EventEmitter<SelectValue<T>>();
	@Output() public readonly closed = new EventEmitter<void>();
	@Output() public readonly searchChanged = new EventEmitter<string>();

	@ContentChildren(OptionComponent, { descendants: true }) private readonly options!: QueryList<OptionComponent<T>>;

	@ViewChild('input') private readonly searchInputEl!: ElementRef<HTMLInputElement>;

	@HostBinding('class.select-panel-open') public isOpen = false;

	@HostListener('blur') private markAsTouched(): void {
		if (this.disabled || this.isOpen) return;

		this.onTouched();
		this.cdr.markForCheck();
	}

	@HostListener('click') private open(): void {
		if (this.disabled) return;

		this.isOpen = true;

		if (this.searchable) {
			setTimeout(() => {
				this.searchInputEl.nativeElement.focus();
			}, 0);
		}

		this.cdr.markForCheck();
	}

	@HostListener('keydown', ['$event']) private onKeyDown(e: KeyboardEvent): void {
		const key = e.key;
		const isOpen = this.isOpen;

		if (key === 'ArrowDown' && !isOpen) {
			this.open();

			return;
		}

		if ((key === 'ArrowDown' || key === 'ArrowUp') && isOpen) {
			this.listKeyManager.onKeydown(e);

			return;
		}

		if (key === 'Enter' && isOpen && this.listKeyManager.activeItem) {
			this.handleSelection(this.listKeyManager.activeItem);
		}
	}

	private onChange: (newValue: SelectValue<T>) => void = () => {};
	private onTouched: () => void = () => {};

	private readonly selectionModel = new SelectionModel<T>(coerceBooleanProperty(this.multiple));
	private readonly optionMap = new Map<T | null, OptionComponent<T>>();
	private readonly unsubscribe$ = new Subject<void>();

	private listKeyManager!: ActiveDescendantKeyManager<OptionComponent<T>>;

	public get value(): null | T[] | T {
		if (this.selectionModel.isEmpty()) {
			return null;
		}

		if (this.selectionModel.isMultipleSelection()) {
			return this.selectionModel.selected;
		}

		return this.selectionModel.selected[0];
	}

	public get displayValue(): (string | number)[] | string | number | T | T[] | null {
		if (this.displayWith && this.value) {
			if (Array.isArray(this.value)) {
				return this.value.map(this.displayWith);
			}

			return this.displayWith(this.value);
		}

		return this.value;
	}

	constructor(
		@Attribute('multiple') private readonly multiple: string | null,
		private readonly cdr: ChangeDetectorRef,
		private readonly hostEl: ElementRef
	) {}

	public ngOnChanges({ compareWith }: SimpleChanges): void {
		if (!compareWith) return;

		this.selectionModel.compareWith = compareWith.currentValue;

		this.highlightSelectedOptions();
	}

	public ngAfterContentInit(): void {
		this.setData();
	}

	public ngOnDestroy(): void {
		this.unsubscribe$.next();
		this.unsubscribe$.complete();
	}

	public writeValue(value: SelectValue<T>): void {
		this.setupValue(value);
		this.highlightSelectedOptions();

		this.cdr.markForCheck();
	}

	public registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	public setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled;

		this.cdr.markForCheck();
	}

	public clearSelection(e?: Event): void {
		e?.stopPropagation();

		if (this.disabled) return;

		this.selectionModel.clear();
		this.selectionChanged.emit(this.value);

		this.onChange(this.value);

		this.cdr.markForCheck();
	}

	public close(): void {
		this.isOpen = false;

		this.onTouched();
		this.hostEl.nativeElement.focus();

		this.cdr.markForCheck();
	}

	public onPanelAnimationDone({ fromState, toState }: AnimationEvent): void {
		if (fromState === 'void' && toState === null && this.isOpen) {
			this.opened.emit();
		}

		if (fromState === null && toState === 'void' && !this.isOpen) {
			this.closed.emit();
		}
	}

	public onSearchInput(e: Event): void {
		this.searchChanged.emit((e.target as HTMLInputElement).value);
	}

	private setupValue(value: SelectValue<T>): void {
		this.selectionModel.clear();

		if (!value) return;

		if (Array.isArray(value)) {
			this.selectionModel.select(...value);

			return;
		}

		this.selectionModel.select(value);
	}

	private handleSelection({ value }: OptionComponent<T>): void {
		if (this.disabled) return;

		if (value) {
			this.selectionModel.toggle(value);
			this.selectionChanged.emit(this.value);

			this.onChange(this.value);
		}

		if (!this.selectionModel.isMultipleSelection()) {
			this.close();
		}
	}

	private refreshOptionsMap(): void {
		this.optionMap.clear();
		this.options.forEach(o => this.optionMap.set(o.value, o));
	}

	private highlightSelectedOptions(): void {
		const valuesWithUpdatedReferences = this.selectionModel.selected.map(value => {
			const correspondingOption = this.findOptionsByValue(value);

			return correspondingOption ? correspondingOption.value! : value;
		});

		this.selectionModel.clear();
		this.selectionModel.select(...valuesWithUpdatedReferences);
	}

	private findOptionsByValue(value: T | null): OptionComponent<T> | undefined {
		if (this.optionMap.has(value)) {
			return this.optionMap.get(value);
		}

		return this.options && this.options.find(o => this.compareWith(o.value, value));
	}

	private setData(): void {
		this.listKeyManager = new ActiveDescendantKeyManager(this.options).withWrap();

		this.listKeyManager.change.pipe(takeUntil(this.unsubscribe$)).subscribe(itemIndex => {
			this.options.get(itemIndex)?.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
		});

		this.selectionModel.changed.pipe(takeUntil(this.unsubscribe$)).subscribe(values => {
			values.removed.forEach(rv => this.optionMap.get(rv)?.deselect());
			values.added.forEach(av => this.optionMap.get(av)?.highlightAsSelected());
		});

		this.options.changes
			.pipe(
				startWith<QueryList<OptionComponent<T>>>(this.options),
				tap(() => this.refreshOptionsMap()),
				tap(() => queueMicrotask(() => this.highlightSelectedOptions())),
				switchMap(options => merge(...options.map(o => o.selected))),
				takeUntil(this.unsubscribe$)
			)
			.subscribe(selectedOption => this.handleSelection(selectedOption));
	}
}
