import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesDemo } from './messagesdemo';
import { MessagesDemoRoutingModule } from './messagesdemo-routing.module';
import { MessagesModule } from '@imamasurya/primeng/messages';
import { MessageModule } from '@imamasurya/primeng/message';
import { InputTextModule } from '@imamasurya/primeng/inputtext';
import { ButtonModule } from '@imamasurya/primeng/button';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { RippleModule } from '@imamasurya/primeng/ripple';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, MessagesDemoRoutingModule, MessagesModule, MessageModule, ButtonModule, InputTextModule, TabViewModule, RippleModule, AppDemoActionsModule, AppCodeModule],
    declarations: [MessagesDemo]
})
export class MessagesDemoModule {}
