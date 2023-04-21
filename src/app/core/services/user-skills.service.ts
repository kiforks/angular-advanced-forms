import { Injectable } from '@angular/core';

/** RxJS */
import { delay, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UserSkillsService {
	public getSkills() {
		return of(['angular', 'typescript', 'git', 'docker']).pipe(delay(1000));
	}
}
