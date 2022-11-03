import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDemo } from './buttondemo';
import { ButtonDemoRoutingModule } from './buttondemo-routing.module';
import { ButtonModule } from '@imamasurya/primeng/button';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { ProgressSpinnerModule } from '@imamasurya/primeng/progressspinner';
import { RippleModule } from '@imamasurya/primeng/ripple';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, ButtonDemoRoutingModule, ButtonModule, TabViewModule, AppCodeModule, ProgressSpinnerModule, AppDemoActionsModule, RippleModule],
    declarations: [ButtonDemo]
})
export class ButtonDemoModule {}
