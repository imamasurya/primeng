import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GMapDemo } from './gmapdemo';
import { GMapDemoRoutingModule } from './gmapdemo-routing.module';
import { GMapModule } from '@imamasurya/primeng/gmap';
import { ToastModule } from '@imamasurya/primeng/toast';
import { CheckboxModule } from '@imamasurya/primeng/checkbox';
import { DialogModule } from '@imamasurya/primeng/dialog';
import { InputTextModule } from '@imamasurya/primeng/inputtext';
import { ButtonModule } from '@imamasurya/primeng/button';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, FormsModule, GMapDemoRoutingModule, GMapModule, ToastModule, InputTextModule, CheckboxModule, DialogModule, ButtonModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [GMapDemo]
})
export class GMapDemoModule {}
