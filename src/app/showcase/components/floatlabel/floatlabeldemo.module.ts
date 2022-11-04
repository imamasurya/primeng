import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FloatLabelDemo } from './floatlabeldemo';
import { FloatLabelDemoRoutingModule } from './floatlabeldemo-routing.module';

import { ButtonModule } from '@imamasurya/primeng/button';
import { PanelModule } from '@imamasurya/primeng/panel';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { InputTextModule } from '@imamasurya/primeng/inputtext';
import { AutoCompleteModule } from '@imamasurya/primeng/autocomplete';
import { CalendarModule } from '@imamasurya/primeng/calendar';
import { ChipsModule } from '@imamasurya/primeng/chips';
import { InputMaskModule } from '@imamasurya/primeng/inputmask';
import { InputNumberModule } from '@imamasurya/primeng/inputnumber';
import { DropdownModule } from '@imamasurya/primeng/dropdown';
import { MultiSelectModule } from '@imamasurya/primeng/multiselect';
import { InputTextareaModule } from '@imamasurya/primeng/inputtextarea';
import { CascadeSelectModule } from '@imamasurya/primeng/cascadeselect';

import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';
import { PasswordModule } from '@imamasurya/primeng/password';

@NgModule({
	imports: [
		CommonModule,
		FloatLabelDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		InputTextModule,
		AutoCompleteModule,
		CalendarModule,
		CascadeSelectModule,
		ChipsModule,
		InputMaskModule,
		InputNumberModule,
		DropdownModule,
		MultiSelectModule,
		InputTextareaModule,
		FormsModule,
		AppDemoActionsModule,
        AppCodeModule,
		PasswordModule
	],
	declarations: [
		FloatLabelDemo
	]
})
export class FloatLabelDemoModule {}
