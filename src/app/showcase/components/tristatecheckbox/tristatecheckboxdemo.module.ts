import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TriStateCheckboxDemo } from './tristatecheckboxdemo';
import { TriStateCheckboxDemoRoutingModule } from './tristatecheckboxdemo-routing.module';
import { TriStateCheckboxModule } from '@imamasurya/primeng/tristatecheckbox';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppInputStyleSwitchModule } from '../../app.inputstyleswitch.component';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, FormsModule, TriStateCheckboxDemoRoutingModule, TriStateCheckboxModule, TabViewModule, AppInputStyleSwitchModule, AppCodeModule, AppDemoActionsModule],
    declarations: [TriStateCheckboxDemo]
})
export class TriStateCheckboxDemoModule {}
