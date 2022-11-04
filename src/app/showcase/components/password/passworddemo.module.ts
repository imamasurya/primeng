import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {PasswordDemo} from './passworddemo';
import {PasswordDemoRoutingModule} from './passworddemo-routing.module';
import {PasswordModule} from '@imamasurya/primeng/password';
import {TabViewModule} from '@imamasurya/primeng/tabview';
import {DividerModule} from '@imamasurya/primeng/divider';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		PasswordDemoRoutingModule,
        PasswordModule,
		DividerModule,
		TabViewModule,
		FormsModule,
		AppDemoActionsModule,
		AppCodeModule
	],
	declarations: [
		PasswordDemo
	]
})
export class PasswordDemoModule {}
