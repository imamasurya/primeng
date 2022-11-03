import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '@imamasurya/primeng/card';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';
import { DockDemo } from './dockdemo';
import { DockDemoRoutingModule } from './dockdemo-routing.module';
import { DockModule } from '@imamasurya/primeng/dock';
import { MenubarModule } from '@imamasurya/primeng/menubar';
import { DialogModule } from '@imamasurya/primeng/dialog';
import { ToastModule } from '@imamasurya/primeng/toast';
import { GalleriaModule } from '@imamasurya/primeng/galleria';
import { TerminalModule } from '@imamasurya/primeng/terminal';
import { TreeModule } from '@imamasurya/primeng/tree';

@NgModule({
    imports: [CommonModule, DockDemoRoutingModule, CardModule, DockModule, TabViewModule, AppCodeModule, MenubarModule, DialogModule, TerminalModule, TreeModule, ToastModule, GalleriaModule, AppDemoActionsModule],
    declarations: [DockDemo]
})
export class DockDemoModule {}
