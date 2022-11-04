import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ButtonModule } from '@imamasurya/primeng/button';
import { TooltipModule } from '@imamasurya/primeng/tooltip';
import { RadioButtonModule } from '@imamasurya/primeng/radiobutton';
import { AutoCompleteModule } from '@imamasurya/primeng/autocomplete';
import { InputSwitchModule } from '@imamasurya/primeng/inputswitch';
import { ChartModule } from '@imamasurya/primeng/chart';
import { TabMenuModule } from '@imamasurya/primeng/tabmenu';
import { SliderModule } from '@imamasurya/primeng/slider';
import { CalendarModule } from '@imamasurya/primeng/calendar';
import { TreeModule } from '@imamasurya/primeng/tree'; 
import { ProgressBarModule } from '@imamasurya/primeng/progressbar';
import { InputNumberModule } from '@imamasurya/primeng/inputnumber';
import { ChipModule } from '@imamasurya/primeng/chip';
import { SelectButtonModule } from '@imamasurya/primeng/selectbutton';
import { TableModule } from '@imamasurya/primeng/table';
import { CheckboxModule } from '@imamasurya/primeng/checkbox';
import { ListboxModule } from '@imamasurya/primeng/listbox';
import { InputMaskModule } from '../components/inputmask/inputmask';
import { DropdownModule } from '@imamasurya/primeng/dropdown';

import { CarService } from './service/carservice';
import { CountryService } from './service/countryservice';
import { EventService } from './service/eventservice';
import { NodeService } from './service/nodeservice';

import { IconService } from './service/iconservice';
import { CustomerService } from './service/customerservice';
import { PhotoService } from './service/photoservice';
import { JsonService } from './service/jsonservice';
import { AppConfigService } from './service/appconfigservice';
import { ProductService } from './service/productservice';

import { AppNewsComponent } from './app.news.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppMenuComponent } from './app.menu.component';
import { AppConfigComponent } from './app.config.component';
import { AppFooterComponent } from './app.footer.component';
import { AppInputStyleSwitchModule } from './app.inputstyleswitch.component';
import { AppDemoActionsModule } from './app.demoactions.component';
import { BadgeModule } from '@imamasurya/primeng/badge';
import { LandingComponent } from './components/landing/landing.component';
import { AppMainComponent } from './app.main.component';

@NgModule({
    declarations: [
        AppComponent,
        AppNewsComponent,
        AppTopBarComponent,
        AppMenuComponent,
        AppConfigComponent,
        AppFooterComponent,
        LandingComponent,
        AppMainComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AutoCompleteModule,
        ButtonModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        TooltipModule,
        AppInputStyleSwitchModule,
        AppDemoActionsModule,
        ChartModule,
        TabMenuModule,
        SliderModule,
        CalendarModule,
        TreeModule,
        ProgressBarModule,
        InputNumberModule,
        ChipModule,
        SelectButtonModule,
        TableModule,
        CheckboxModule,
        ListboxModule,
        InputMaskModule,
        DropdownModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CarService,CountryService,EventService,NodeService,IconService,CustomerService,PhotoService,JsonService,AppConfigService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
