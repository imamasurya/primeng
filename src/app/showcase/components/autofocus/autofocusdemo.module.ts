import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppCodeModule } from '../../app.code.component';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AutoFocusModule } from '@imamasurya/primeng/autofocus';
import { AppDemoActionsModule } from '../../app.demoactions.component';
import { AutoFocusDemo } from './autofocusdemo.component';
import { AutoFocusDemoRoutingModule } from './autofocusdemo-routing.module';
import { InputTextModule } from '@imamasurya/primeng/inputtext';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AppCodeModule,
        TabViewModule,
        AutoFocusModule,
        InputTextModule,
        AppDemoActionsModule,
        AutoFocusDemoRoutingModule
    ],
    declarations: [AutoFocusDemo],
})
export class AutoFocusDemoModule { }
