import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerDemo } from './progressspinnerdemo';
import { ProgressSpinnerDemoRoutingModule } from './progressspinnerdemo-routing.module';
import { ProgressSpinnerModule } from '@imamasurya/primeng/progressspinner';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, ProgressSpinnerDemoRoutingModule, ProgressSpinnerModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [ProgressSpinnerDemo]
})
export class ProgressSpinnerDemoModule {}
