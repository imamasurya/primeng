import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {FullCalendarDemo} from './fullcalendardemo';
import {FullCalendarDemoRoutingModule} from './fullcalendardemo-routing.module';
import {DialogModule} from '@imamasurya/primeng/dialog';
import {InputTextModule} from '@imamasurya/primeng/inputtext';
import {CalendarModule} from '@imamasurya/primeng/calendar';
import {CheckboxModule} from '@imamasurya/primeng/checkbox';
import {ButtonModule} from '@imamasurya/primeng/button';
import {TabViewModule} from '@imamasurya/primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin
]);

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		FullCalendarDemoRoutingModule,
        FullCalendarModule,
        DialogModule,
        InputTextModule,
        CalendarModule,
        CheckboxModule,
        ButtonModule,
        TabViewModule,
        AppDemoActionsModule,
        AppCodeModule
	],
	declarations: [
		FullCalendarDemo
	]
})
export class FullCalendarDemoModule {}
