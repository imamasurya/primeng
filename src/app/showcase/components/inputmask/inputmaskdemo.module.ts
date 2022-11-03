import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputMaskDemo } from './inputmaskdemo';
import { InputMaskDemoRoutingModule } from './inputmaskdemo-routing.module';
import { InputMaskModule } from '@imamasurya/primeng/inputmask';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, FormsModule, InputMaskDemoRoutingModule, InputMaskModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [InputMaskDemo]
})
export class InputMaskDemoModule {}
