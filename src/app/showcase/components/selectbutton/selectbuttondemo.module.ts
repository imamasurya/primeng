import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButtonDemo } from './selectbuttondemo';
import { SelectButtonDemoRoutingModule } from './selectbuttondemo-routing.module';
import { SelectButtonModule } from '@imamasurya/primeng/selectbutton';
import { ButtonModule } from '@imamasurya/primeng/button';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, SelectButtonDemoRoutingModule, FormsModule, SelectButtonModule, ButtonModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [SelectButtonDemo]
})
export class SelectButtonDemoModule {}
