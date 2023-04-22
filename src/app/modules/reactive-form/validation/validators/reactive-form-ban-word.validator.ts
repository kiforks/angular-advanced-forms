import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function reactiveFormBanWordValidator(bannedWords: string[] = []): ValidatorFn {
	return ({ value }: AbstractControl<string | null>): ValidationErrors | null => {
		const foundBannedWord = bannedWords.find(word => word.toLowerCase() === value?.toLowerCase());
		const errorData = { banWords: { bannedWord: foundBannedWord } };

		return foundBannedWord ? errorData : null;
	};
}
