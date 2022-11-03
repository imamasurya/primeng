import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListDemo } from './orderlistdemo';
import { OrderListDemoRoutingModule } from './orderlistdemo-routing.module';
import { OrderListModule } from '@imamasurya/primeng/orderlist';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, OrderListDemoRoutingModule, OrderListModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [OrderListDemo]
})
export class OrderListDemoModule {}
