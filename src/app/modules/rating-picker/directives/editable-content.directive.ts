import { Directive, ElementRef, HostListener, Renderer2, SecurityContext } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
	selector: '[formControlName][contenteditable],[formControl][contenteditable],[ngModel][contenteditable]',
	standalone: true,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: EditableContentValueAccessor,
			multi: true,
		},
	],
})
export class EditableContentValueAccessor implements ControlValueAccessor {
	private onChange!: (newValue: string) => void;
	private onTouch!: () => void;

	constructor(
		private readonly renderer: Renderer2,
		private readonly elementRef: ElementRef,
		private readonly domSanitizer: DomSanitizer
	) {}

	@HostListener('input', ['$event']) public onInput(e: Event): void {
		this.onChange((e.target as HTMLElement).innerHTML);
	}

	@HostListener('blur') public onBlur(): void {
		this.onTouch();
	}

	public writeValue(obj: any): void {
		const DEFAULT_REVIEW_TEMPLATE = `<h4 data-placeholder="Title..."></h4>  <p data-placeholder="Describe Your Experiance..."></p>`;

		this.renderer.setProperty(
			this.elementRef.nativeElement,
			'innerHTML',
			this.domSanitizer.sanitize(SecurityContext.HTML, obj) || DEFAULT_REVIEW_TEMPLATE
		);
	}

	public registerOnChange(fn: () => void): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouch = fn;
	}

	public setDisabledState?(isDisabled: boolean): void {
		this.renderer.setProperty(this.elementRef.nativeElement, 'contentEditable', !isDisabled);
	}
}
