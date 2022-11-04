import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TreeSelectDemoRoutingModule} from './treeselectdemo-routing.module';
import {ButtonModule} from '@imamasurya/primeng/button';
import {PanelModule} from '@imamasurya/primeng/panel';
import {TabViewModule} from '@imamasurya/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {CascadeSelectModule} from '@imamasurya/primeng/cascadeselect';
import {FormsModule} from '@angular/forms';
import { AppDemoActionsModule } from '../../app.demoactions.component';
import { TreeSelectModule } from '@imamasurya/primeng/treeselect';
import { TreeSelectDemo } from './treeselectdemo';

@NgModule({
	imports: [
		CommonModule,
		TreeSelectDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		CascadeSelectModule,
		FormsModule,
		AppDemoActionsModule,
		AppCodeModule,
        TreeSelectModule
	],
	declarations: [
		TreeSelectDemo
	]
})
export class TreeSelectDemoModule {}
