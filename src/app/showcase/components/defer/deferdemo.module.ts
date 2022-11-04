import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeferDemo} from './deferdemo';
import {DeferDemoRoutingModule} from './deferdemo-routing.module';
import {DeferModule} from '@imamasurya/primeng/defer';
import {TableModule} from '@imamasurya/primeng/table';
import {ToastModule} from '@imamasurya/primeng/toast';
import {TabViewModule} from '@imamasurya/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		DeferDemoRoutingModule,
        DeferModule,
        ToastModule,
        TabViewModule,
        TableModule,
		AppDemoActionsModule,
        AppCodeModule
	],
	declarations: [
		DeferDemo
	]
})
export class DeferDemoModule {}
