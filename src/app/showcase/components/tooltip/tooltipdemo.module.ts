import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDemo} from './tooltipdemo';
import {TooltipDemoRoutingModule} from './tooltipdemo-routing.module';
import {TooltipModule} from '@imamasurya/primeng/tooltip';
import {InputTextModule} from '@imamasurya/primeng/inputtext';
import {TabViewModule} from '@imamasurya/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {ButtonModule} from '@imamasurya/primeng/button';
import {RippleModule} from '@imamasurya/primeng/ripple';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		TooltipDemoRoutingModule,
        TooltipModule,
        InputTextModule,
		TabViewModule,
		AppCodeModule,
		ButtonModule,
		AppDemoActionsModule,
		RippleModule
	],
	declarations: [
		TooltipDemo
	]
})
export class TooltipDemoModule {}
