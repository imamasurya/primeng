import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataViewDemo } from './dataviewdemo';
import { DataViewDemoRoutingModule } from './dataviewdemo-routing.module';
import { DataViewModule } from '@imamasurya/primeng/dataview';
import { PanelModule } from '@imamasurya/primeng/panel';
import { InputTextModule } from '@imamasurya/primeng/inputtext';
import { RatingModule } from '@imamasurya/primeng/rating';
import { ButtonModule } from '@imamasurya/primeng/button';
import { DropdownModule } from '@imamasurya/primeng/dropdown';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, FormsModule, DataViewDemoRoutingModule, DataViewModule, PanelModule, DropdownModule, TabViewModule, InputTextModule, RatingModule, ButtonModule, AppDemoActionsModule, AppCodeModule],
    declarations: [DataViewDemo]
})
export class DataViewDemoModule {}
