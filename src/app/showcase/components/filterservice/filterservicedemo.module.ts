import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@imamasurya/primeng/button';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { FilterServiceDemo } from './filterservicedemo';
import { FilterServiceDemoRoutingModule } from './filterservice-routing.module';
import { AutoCompleteModule } from '@imamasurya/primeng/autocomplete';
import { TableModule } from '@imamasurya/primeng/table';
import { InputTextModule } from '@imamasurya/primeng/inputtext';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, FilterServiceDemoRoutingModule, ButtonModule, TabViewModule, AppCodeModule, AutoCompleteModule, FormsModule, TableModule, InputTextModule, AppDemoActionsModule],
    declarations: [FilterServiceDemo]
})
export class FilterServiceDemoModule {}
