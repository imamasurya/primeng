import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputGroupDemo } from './inputgroupdemo';
import { InputGroupDemoRoutingModule } from './inputgroupdemo-routing.module';
import { InputTextModule } from '@imamasurya/primeng/inputtext';
import { CheckboxModule } from '@imamasurya/primeng/checkbox';
import { RadioButtonModule } from '@imamasurya/primeng/radiobutton';
import { ButtonModule } from '@imamasurya/primeng/button';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { RippleModule } from '@imamasurya/primeng/ripple';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, InputGroupDemoRoutingModule, FormsModule, InputTextModule, ButtonModule, CheckboxModule, RadioButtonModule, RippleModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [InputGroupDemo]
})
export class InputGroupDemoModule {}
