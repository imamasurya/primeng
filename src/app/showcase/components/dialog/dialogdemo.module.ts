import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DialogDemo} from './dialogdemo';
import {DialogDemoRoutingModule} from './dialogdemo-routing.module';
import {DialogModule} from '@imamasurya/primeng/dialog';
import {ButtonModule} from '@imamasurya/primeng/button';
import {TabViewModule} from '@imamasurya/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		DialogDemoRoutingModule,
        DialogModule,
		ButtonModule,
		AppCodeModule,
		AppDemoActionsModule,
        TabViewModule
	],
	declarations: [
		DialogDemo
	]
})
export class DialogDemoModule {}
