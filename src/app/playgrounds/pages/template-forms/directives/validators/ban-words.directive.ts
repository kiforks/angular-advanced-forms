import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
	selector: '[banWords]',
	standalone: true,
	providers: [{ provide: NG_VALIDATORS, useExisting: BanWordsDirective, multi: true }],
})
export class BanWordsDirective implements Validator {
	@Input() public set banWords(value: string | string[]) {
		this.bannedWords = Array.isArray(value) ? value : [value];

		this.onChange();
	}

	private onChange: () => void = () => {};

	private bannedWords: string[] = [];

	public validate({ value }: AbstractControl<string>): ValidationErrors | null {
		const foundBannedWord = this.bannedWords.find(word => word.toLowerCase() === value?.toLowerCase());
		const errorData = { banWords: { bannedWord: foundBannedWord } };

		return foundBannedWord ? errorData : null;
	}

	public registerOnValidatorChange(fn: () => void): void {
		this.onChange = fn;
	}
}
