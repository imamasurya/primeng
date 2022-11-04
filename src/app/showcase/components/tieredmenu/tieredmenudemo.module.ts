import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TieredMenuDemo} from './tieredmenudemo';
import {TieredMenuDemoRoutingModule} from './tieredmenudemo-routing.module';
import {TieredMenuModule} from '@imamasurya/primeng/tieredmenu';
import {ButtonModule} from '@imamasurya/primeng/button';
import {TabViewModule} from '@imamasurya/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		TieredMenuDemoRoutingModule,
        TieredMenuModule,
        ButtonModule,
		TabViewModule,
		AppCodeModule,
		AppDemoActionsModule
	],
	declarations: [
		TieredMenuDemo
	]
})
export class TieredMenuDemoModule {}
