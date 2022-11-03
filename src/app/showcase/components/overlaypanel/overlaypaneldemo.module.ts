import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayPanelDemo } from './overlaypaneldemo';
import { OverlayPanelDemoRoutingModule } from './overlaypaneldemo-routing.module';
import { OverlayPanelModule } from '@imamasurya/primeng/overlaypanel';
import { ButtonModule } from '@imamasurya/primeng/button';
import { TableModule } from '@imamasurya/primeng/table';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { ToastModule } from '@imamasurya/primeng/toast';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, OverlayPanelDemoRoutingModule, OverlayPanelModule, ButtonModule, TableModule, TabViewModule, AppCodeModule, AppDemoActionsModule, ToastModule],
    declarations: [OverlayPanelDemo]
})
export class OverlayPanelDemoModule {}
