import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginatorDemo} from './paginatordemo';
import {PaginatorDemoRoutingModule} from './paginatordemo-routing.module';
import {PaginatorModule} from '@imamasurya/primeng/paginator';
import {TabViewModule} from '@imamasurya/primeng/tabview';
import {ButtonModule} from '@imamasurya/primeng/button';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		PaginatorDemoRoutingModule,
        PaginatorModule,
		TabViewModule,
		AppCodeModule,
		ButtonModule,
		AppDemoActionsModule
	],
	declarations: [
		PaginatorDemo
	]
})
export class PaginatorDemoModule {}
