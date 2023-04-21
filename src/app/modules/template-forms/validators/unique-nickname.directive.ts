import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';

/** RxJS */
import { catchError, finalize, map, Observable, of } from 'rxjs';

@Directive({
	selector: '[uniqueNickname]',
	standalone: true,
	providers: [
		{
			provide: NG_ASYNC_VALIDATORS,
			multi: true,
			useExisting: UniqueNicknameDirective,
		},
	],
})
export class UniqueNicknameDirective implements AsyncValidator {
	constructor(private httpClient: HttpClient, private cdr: ChangeDetectorRef) {}

	public validate({
		value,
	}: AbstractControl<string>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
		const isTakenError = { uniqueNickname: { isTaken: true } };
		const unknownError = { uniqueNickname: { unknownError: true } };

		return this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/users?username=${value}`).pipe(
			map(({ length }) => (length === 0 ? null : isTakenError)),
			catchError(() => of(unknownError)),
			finalize(() => this.cdr.markForCheck())
		);
	}
}
