import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepsDemo} from './stepsdemo';
import { StepsDemoRoutingModule } from './stepsdemo-routing.module';
import { StepsModule } from '@imamasurya/primeng/steps';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';
import { SeatDemo } from './seatdemo';
import { ConfirmationDemo } from './confirmationdemo';
import { PersonalDemo } from './personaldemo';
import { PaymentDemo } from './paymentdemo';
import { ButtonModule } from '@imamasurya/primeng/button';
import { CardModule } from '@imamasurya/primeng/card';
import { DropdownModule } from '@imamasurya/primeng/dropdown';
import { InputTextModule } from '@imamasurya/primeng/inputtext';
import { InputMaskModule } from '@imamasurya/primeng/inputmask';
import { CheckboxModule } from '@imamasurya/primeng/checkbox';
import { ToastModule } from '@imamasurya/primeng/toast';
import { FormsModule } from '@angular/forms';
import { TicketService } from './ticketservice';

@NgModule({
	imports: [
		CommonModule,
		StepsDemoRoutingModule,
        StepsModule,
		TabViewModule,
		AppCodeModule,
		AppDemoActionsModule,
		ButtonModule,
		CardModule,
		InputTextModule,
		DropdownModule,
		InputMaskModule,
		CheckboxModule,
		ToastModule,
		FormsModule
	],
	declarations: [
		StepsDemo,
		SeatDemo,
		ConfirmationDemo,
		PersonalDemo,
		PaymentDemo
	],
	providers: [
		TicketService
	]
})
export class StepsDemoModule {}
