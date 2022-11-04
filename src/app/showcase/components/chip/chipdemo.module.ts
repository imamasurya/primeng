import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipDemo} from './chipdemo';
import {ChipDemoRoutingModule} from './chipdemo-routing.module';
import {ButtonModule} from '@imamasurya/primeng/button';
import {PanelModule} from '@imamasurya/primeng/panel';
import {TabViewModule} from '@imamasurya/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import { ChipModule } from '@imamasurya/primeng/chip';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		ChipDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		ChipModule,
		AppDemoActionsModule,
		AppCodeModule
	],
	declarations: [
		ChipDemo
	]
})
export class ChipDemoModule {}
