import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyFilterDemo } from './keyfilterdemo';
import { FormsModule } from '@angular/forms';
import { MessageModule } from '@imamasurya/primeng/message';
import { KeyFilterDemoRoutingModule } from './keyfilterdemo-routing.module';
import { KeyFilterModule } from '@imamasurya/primeng/keyfilter';
import { InputTextModule } from '@imamasurya/primeng/inputtext';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, FormsModule, KeyFilterDemoRoutingModule, KeyFilterModule, InputTextModule, MessageModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [KeyFilterDemo]
})
export class KeyFilterDemoModule {}
