import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTopDemo } from './scrolltopdemo';
import { ScrollTopDemoRoutingModule } from './scrolltopdemo-routing.module';
import { ButtonModule } from '@imamasurya/primeng/button';
import { PanelModule } from '@imamasurya/primeng/panel';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { TableModule } from '@imamasurya/primeng/table';
import { ScrollTopModule } from '@imamasurya/primeng/scrolltop';
import { ScrollPanelModule } from '@imamasurya/primeng/scrollpanel';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, ScrollTopDemoRoutingModule, ButtonModule, PanelModule, TabViewModule, ScrollTopModule, ScrollPanelModule, TableModule, AppDemoActionsModule, AppCodeModule],
    declarations: [ScrollTopDemo]
})
export class ScrollTopDemoModule {}
