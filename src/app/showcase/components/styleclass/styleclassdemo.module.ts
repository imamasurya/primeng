import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@imamasurya/primeng/button';
import { InputTextModule } from '@imamasurya/primeng/inputtext';
import { StyleClassDemoRoutingModule } from './styleclassdemo-routing.module';
import { StyleClassDemo } from './styleclassdemo';
import { StyleClassModule } from '@imamasurya/primeng/styleclass';
import { AppCodeModule } from '../../app.code.component';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		StyleClassDemoRoutingModule,
        FormsModule,
        ButtonModule,
		InputTextModule,
		StyleClassModule,
		AppCodeModule,
		TabViewModule,
		AppDemoActionsModule
	],
	declarations: [
		StyleClassDemo
	]
})
export class StyleClassDemoModule {}
