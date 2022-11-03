import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from '@imamasurya/primeng/dialog';
import { InputTextModule } from '@imamasurya/primeng/inputtext';
import { ButtonModule } from '@imamasurya/primeng/button';
import { AccordionModule } from '@imamasurya/primeng/accordion';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { FocusTrapDemoRoutingModule } from './focustrapdemo-routing.module';
import { FocusTrapDemo } from './focustrapdemo';
import { AutoCompleteModule } from '@imamasurya/primeng/autocomplete';
import { CalendarModule } from '@imamasurya/primeng/calendar';
import { MultiSelectModule } from '@imamasurya/primeng/multiselect';
import { DropdownModule } from '@imamasurya/primeng/dropdown';
import { EditorModule } from '@imamasurya/primeng/editor';
import { FocusTrapModule } from '@imamasurya/primeng/focustrap';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [
        CommonModule,
        FocusTrapDemoRoutingModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        AccordionModule,
        TabViewModule,
        AppCodeModule,
        FocusTrapModule,
        AutoCompleteModule,
        CalendarModule,
        MultiSelectModule,
        DropdownModule,
        EditorModule,
        AppDemoActionsModule
    ],
    declarations: [FocusTrapDemo]
})
export class FocusTrapDemoModule {}
