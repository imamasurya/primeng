import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionDemo } from './accordiondemo';
import { AccordionDemoRoutingModule } from './accordiondemo-routing.module';
import { AccordionModule } from '@imamasurya/primeng/accordion';
import { ButtonModule } from '@imamasurya/primeng/button';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { ToastModule } from '@imamasurya/primeng/toast';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, AccordionDemoRoutingModule, AccordionModule, ButtonModule, TabViewModule, ToastModule, AppCodeModule, AppDemoActionsModule],
    declarations: [AccordionDemo]
})
export class AccordionDemoModule {}
