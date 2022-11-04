import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InvalidDemo } from './invaliddemo';
import { InvalidDemoRoutingModule } from './invaliddemo-routing.module';

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
import { PasswordModule } from '@imamasurya/primeng/password';
import { TreeSelectModule } from '@imamasurya/primeng/treeselect';

import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		InvalidDemoRoutingModule,
		ButtonModule,
		CascadeSelectModule,
        PanelModule,
		TabViewModule,
		InputTextModule,
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		InputMaskModule,
		InputNumberModule,
		DropdownModule,
		MultiSelectModule,
		InputTextareaModule,
        PasswordModule,
        TreeSelectModule,
		FormsModule,
		AppDemoActionsModule,
        AppCodeModule
	],
	declarations: [
		InvalidDemo
	]
})
export class InvalidDemoModule {}
