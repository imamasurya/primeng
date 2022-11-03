import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonDemo } from './skeletondemo';
import { SkeletonDemoRoutingModule } from './skeletondemo-routing.module';
import { ButtonModule } from '@imamasurya/primeng/button';
import { PanelModule } from '@imamasurya/primeng/panel';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { SkeletonModule } from '@imamasurya/primeng/skeleton';
import { TableModule } from '@imamasurya/primeng/table';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, SkeletonDemoRoutingModule, ButtonModule, PanelModule, TabViewModule, SkeletonModule, TableModule, AppCodeModule, AppDemoActionsModule],
    declarations: [SkeletonDemo]
})
export class SkeletonDemoModule {}
