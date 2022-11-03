import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SliderDemo } from './sliderdemo';
import { SliderDemoRoutingModule } from './sliderdemo-routing.module';
import { SliderModule } from '@imamasurya/primeng/slider';
import { InputTextModule } from '@imamasurya/primeng/inputtext';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, FormsModule, SliderDemoRoutingModule, SliderModule, InputTextModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [SliderDemo]
})
export class SliderDemoModule {}
