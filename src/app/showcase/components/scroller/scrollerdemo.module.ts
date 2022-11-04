import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollerDemo } from './scrollerdemo';
import { ScrollerModule } from '@imamasurya/primeng/scroller';
import { ScrollerDemoRoutingModule } from './scrollerdemo-routing.module';
import { SkeletonModule } from '@imamasurya/primeng/skeleton';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [
        CommonModule,
        ScrollerModule,
        ScrollerDemoRoutingModule,
        SkeletonModule,
        TabViewModule,
        AppCodeModule,
        AppDemoActionsModule
    ],
    declarations: [
        ScrollerDemo
    ]
})
export class ScrollerDemoModule { }
