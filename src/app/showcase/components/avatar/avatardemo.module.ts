import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarDemo } from './avatardemo';
import { AvatarDemoRoutingModule } from './avatardemo-routing.module';
import { AccordionModule } from '@imamasurya/primeng/accordion';
import { ButtonModule } from '@imamasurya/primeng/button';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { ToastModule } from '@imamasurya/primeng/toast';
import { AvatarModule } from '@imamasurya/primeng/avatar';
import { AvatarGroupModule } from '@imamasurya/primeng/avatargroup';
import { BadgeModule } from '@imamasurya/primeng/badge';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, AvatarDemoRoutingModule, AccordionModule, ButtonModule, TabViewModule, ToastModule, AvatarModule, AvatarGroupModule, BadgeModule, AppDemoActionsModule, AppCodeModule],
    declarations: [AvatarDemo]
})
export class AvatarDemoModule {}
