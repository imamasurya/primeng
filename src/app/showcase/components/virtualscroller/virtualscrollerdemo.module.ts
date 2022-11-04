import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {VirtualScrollerDemo} from './virtualscrollerdemo';
import {VirtualScrollerDemoRoutingModule} from './virtualscrollerdemo-routing.module';
import {VirtualScrollerModule} from '@imamasurya/primeng/virtualscroller';
import {ButtonModule} from '@imamasurya/primeng/button';
import {InputTextModule} from '@imamasurya/primeng/inputtext';
import {DropdownModule} from '@imamasurya/primeng/dropdown';
import {TabViewModule} from '@imamasurya/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
		VirtualScrollerDemoRoutingModule,
        VirtualScrollerModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        TabViewModule,
        AppCodeModule,
        AppDemoActionsModule
	],
	declarations: [
		VirtualScrollerDemo
	]
})
export class VirtualScrollerDemoModule {}
