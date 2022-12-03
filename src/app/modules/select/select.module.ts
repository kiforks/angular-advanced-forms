import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './components/select/select.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { OptionComponent } from './components/option/option.component';

const components = [SelectComponent, OptionComponent];

@NgModule({
	declarations: [components],
	imports: [CommonModule, OverlayModule],
	exports: [components],
})
export class SelectModule {}
