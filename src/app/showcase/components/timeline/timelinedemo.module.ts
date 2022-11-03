import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineDemo } from './timelinedemo';
import { TimelineDemoRoutingModule } from './timelinedemo-routing.module';
import { TimelineModule } from '@imamasurya/primeng/timeline';
import { CardModule } from '@imamasurya/primeng/card';
import { ButtonModule } from '@imamasurya/primeng/button';
import { SplitButtonModule } from '@imamasurya/primeng/splitbutton';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, TimelineDemoRoutingModule, TimelineModule, CardModule, ButtonModule, SplitButtonModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [TimelineDemo]
})
export class TimelineDemoModule {}
