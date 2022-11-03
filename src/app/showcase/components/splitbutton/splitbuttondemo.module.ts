import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitButtonDemo } from './splitbuttondemo';
import { SplitButtonDemoRoutingModule } from './splitbuttondemo-routing.module';
import { SplitButtonModule } from '@imamasurya/primeng/splitbutton';
import { ToastModule } from '@imamasurya/primeng/toast';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, SplitButtonDemoRoutingModule, SplitButtonModule, ToastModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [SplitButtonDemo]
})
export class SplitButtonDemoModule {}
