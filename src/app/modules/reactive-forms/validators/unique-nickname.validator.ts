import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';

/** RxJS */
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UniqueNicknameValidator implements AsyncValidator {
	constructor(private httpClient: HttpClient) {}

	public validate({
		value,
	}: AbstractControl<string | null>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
		const isTakenError = { uniqueName: { isTaken: true } };
		const unknownError = { uniqueName: { unknownError: true } };

		return this.httpClient.get<unknown[]>(`https://jsonplaceholder.typicode.com/users?username=${value}`).pipe(
			map(({ length }) => (length === 0 ? null : isTakenError)),
			catchError(() => of(unknownError))
		);
	}
}
