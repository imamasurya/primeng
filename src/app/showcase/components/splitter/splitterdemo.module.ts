import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SplitterDemo} from './splitterdemo';
import {SplitterDemoRoutingModule} from './splitterdemo-routing.module';
import {ButtonModule} from '@imamasurya/primeng/button';
import {PanelModule} from '@imamasurya/primeng/panel';
import {TabViewModule} from '@imamasurya/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import { SplitterModule } from '@imamasurya/primeng/splitter';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		SplitterDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		SplitterModule,
		AppCodeModule,
		AppDemoActionsModule
	],
	declarations: [
		SplitterDemo
	]
})
export class SplitterDemoModule {}
