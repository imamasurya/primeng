import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@imamasurya/primeng/button';
import { PanelModule } from '@imamasurya/primeng/panel';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { KnobModule } from '@imamasurya/primeng/knob';
import { KnobDemo } from './knobdemo';
import { KnobDemoRoutingModule } from './knobdemo-routing.module';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, KnobDemoRoutingModule, ButtonModule, PanelModule, TabViewModule, FormsModule, KnobModule, AppDemoActionsModule, AppCodeModule],
    declarations: [KnobDemo]
})
export class KnobDemoModule {}
