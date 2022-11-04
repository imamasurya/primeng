import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms'
import {ColorPickerDemo} from './colorpickerdemo';
import {ColorPickerDemoRoutingModule} from './colorpickerdemo-routing.module';
import {ColorPickerModule} from '@imamasurya/primeng/colorpicker';
import {TabViewModule} from '@imamasurya/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';
import { ButtonModule } from '@imamasurya/primeng/button';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		ColorPickerDemoRoutingModule,
        ColorPickerModule,
		TabViewModule,
		AppDemoActionsModule,
		ButtonModule,
		AppCodeModule
	],
	declarations: [
		ColorPickerDemo
	]
})
export class ColorPickerDemoModule {}
