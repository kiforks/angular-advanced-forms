import { animate, state, style, transition, trigger } from '@angular/animations';

export const dropDownAnimation = trigger('dropDown', [
	state('void', style({ transform: 'scaleY(0)', opacity: 0 })),
	state('*', style({ transform: 'scaleY(1)', opacity: 1 })),
	transition(':enter', [animate('320ms cubic-bezier(0, 1, 0.45, 1.34)')]),
	transition(':leave', [animate('420ms cubic-bezier(0.88,-0.7, 0.86, 0.85)')]),
]);
