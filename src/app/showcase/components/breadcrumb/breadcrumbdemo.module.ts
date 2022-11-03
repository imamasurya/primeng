import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbDemo } from './breadcrumbdemo';
import { BreadcrumbDemoRoutingModule } from './breadcrumbdemo-routing.module';
import { BreadcrumbModule } from '@imamasurya/primeng/breadcrumb';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, BreadcrumbDemoRoutingModule, BreadcrumbModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [BreadcrumbDemo]
})
export class BreadcrumbDemoModule {}
