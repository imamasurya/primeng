import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockUIDemo} from './blockuidemo';
import {BlockUIDemoRoutingModule} from './blockuidemo-routing.module';
import {BlockUIModule} from '@imamasurya/primeng/blockui';
import {ButtonModule} from '@imamasurya/primeng/button';
import {PanelModule} from '@imamasurya/primeng/panel';
import {TabViewModule} from '@imamasurya/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		BlockUIDemoRoutingModule,
        BlockUIModule,
        ButtonModule,
        PanelModule,
        TabViewModule,
        AppCodeModule,
		AppDemoActionsModule
	],
	declarations: [
		BlockUIDemo
	]
})
export class BlockUIDemoModule {}
