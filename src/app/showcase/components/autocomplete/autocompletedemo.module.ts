import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoCompleteDemo } from './autocompletedemo';
import { AutoCompleteDemoRoutingModule } from './autocompletedemo-routing.module';
import { AutoCompleteModule } from '@imamasurya/primeng/autocomplete';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, FormsModule, AutoCompleteDemoRoutingModule, AutoCompleteModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [AutoCompleteDemo]
})
export class AutoCompleteDemoModule {}
