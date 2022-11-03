import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InplaceDemo } from './inplacedemo';
import { InplaceDemoRoutingModule } from './inplacedemo-routing.module';
import { InplaceModule } from '@imamasurya/primeng/inplace';
import { InputTextModule } from '@imamasurya/primeng/inputtext';
import { TableModule } from '@imamasurya/primeng/table';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, InplaceDemoRoutingModule, InplaceModule, InputTextModule, TableModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [InplaceDemo]
})
export class InplaceDemoModule {}
