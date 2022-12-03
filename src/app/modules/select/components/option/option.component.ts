import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter,
	HostBinding,
	HostListener,
	Input,
	Output,
} from '@angular/core';

/** CDK */
import { Highlightable } from '@angular/cdk/a11y';

@Component({
	selector: 'cfc-option',
	templateUrl: './option.component.html',
	styleUrls: ['./option.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionComponent<T> implements Highlightable {
	@Input() public value: T | null = null;
	@Input() public disabledReason = '';

	@Input() @HostBinding('class.disabled') public disabled = false;

	@Output() public readonly selected = new EventEmitter<OptionComponent<T>>();

	@HostBinding('class.selected') private isSelected = false;
	@HostBinding('class.active') private isActive = false;

	@HostListener('click') private select() {
		if (this.disabled) return;

		this.highlightAsSelected();
		this.selected.emit(this);
	}

	constructor(private cdr: ChangeDetectorRef, private el: ElementRef<HTMLElement>) {}

	public setActiveStyles(): void {
		this.isActive = true;
		this.cdr.markForCheck();
	}

	public setInactiveStyles(): void {
		this.isActive = false;
		this.cdr.markForCheck();
	}

	public scrollIntoView(options?: ScrollIntoViewOptions) {
		this.el.nativeElement.scrollIntoView(options);
	}

	public highlightAsSelected() {
		this.isSelected = true;
		this.cdr.markForCheck();
	}

	public deselect() {
		this.isSelected = false;
		this.cdr.markForCheck();
	}
}
