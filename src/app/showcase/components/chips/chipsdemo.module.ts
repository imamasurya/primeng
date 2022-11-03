import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChipsDemo } from './chipsdemo';
import { ChipsDemoRoutingModule } from './chipsdemo-routing.module';
import { ChipsModule } from '@imamasurya/primeng/chips';
import { ButtonModule } from '@imamasurya/primeng/button';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, FormsModule, ChipsDemoRoutingModule, ChipsModule, ButtonModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [ChipsDemo]
})
export class ChipsDemoModule {}
