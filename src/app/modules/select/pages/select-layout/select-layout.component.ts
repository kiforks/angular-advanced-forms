import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../../core/classes/user';
import { SelectModule } from '../../select.module';
import { SelectValue } from '../../interfaces/select.interface';

@Component({
	selector: 'app-custom-select-page',
	standalone: true,
	imports: [CommonModule, SelectModule, ReactiveFormsModule],
	templateUrl: './select-layout.component.html',
	styleUrls: ['../../../../../assets/scss/common-page.scss', './select-layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectLayout implements OnInit {
	public readonly selectValue: FormControl<SelectValue<User>> = new FormControl([
		new User(2, 'Niels Bohr', 'niels', 'Denmark'),
		new User(1, 'Albert Einstein', 'albert', 'Germany/USA'),
	]);

	private readonly users: User[] = [
		new User(1, 'Albert Einstein', 'albert', 'Germany/USA'),
		new User(2, 'Niels Bohr', 'niels', 'Denmark'),
		new User(3, 'Marie Curie', 'marie', 'Poland/French'),
		new User(4, 'Isaac Newton', 'isaac', 'United Kingdom'),
		new User(5, 'Stephen Hawking', 'stephen', 'United Kingdom', true),
		new User(6, 'Max Planck', 'max', 'Germany'),
		new User(7, 'James Clerk Maxwell', 'james', 'United Kingdom'),
		new User(8, 'Michael Faraday', 'michael', 'United Kingdom'),
		new User(9, 'Richard Feynman', 'richard', 'USA'),
		new User(10, 'Ernest Rutherford', 'ernest', 'New Zealand'),
	];
	public filteredUsers = this.users;

	public ngOnInit(): void {
		this.selectValue.valueChanges.subscribe(this.onSelectionChanged);
	}

	public onSearchChanged(queryString: string) {
		this.filteredUsers = this.users.filter(user => user.name.toLowerCase().startsWith(queryString.toLowerCase()));
	}

	public displayWithFn({ name }: User) {
		return name;
	}

	public compareWithFn(user: User | null, user2: User | null) {
		return user?.id === user2?.id;
	}

	public onSelectionChanged(value: unknown) {
		console.log('Selected value: ', value);
	}
}
