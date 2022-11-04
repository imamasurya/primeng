import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarDemo} from './toolbardemo';
import {ToolbarDemoRoutingModule} from './toolbardemo-routing.module';
import {ToolbarModule} from '@imamasurya/primeng/toolbar';
import {ButtonModule} from '@imamasurya/primeng/button';
import {SplitButtonModule} from '@imamasurya/primeng/splitbutton';
import {TabViewModule} from '@imamasurya/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		ToolbarDemoRoutingModule,
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
		TabViewModule,
		AppCodeModule,
		AppDemoActionsModule
	],
	declarations: [
		ToolbarDemo
	]
})
export class ToolbarDemoModule {}
