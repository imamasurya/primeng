import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableDemo } from './tabledemo';
import { TableBasicDemo } from './tablebasicdemo';
import { TableDynamicDemo } from './tabledynamicdemo';
import { TableTemplatingDemo } from './tabletemplatingdemo';
import { TableSizeDemo } from './tablesizedemo';
import { TableGridLinesDemo } from './tablegridlinesdemo';
import { TableStripedDemo } from './tablestripeddemo';
import { TablePageDemo } from './tablepagedemo';
import { TableSortDemo } from './tablesortdemo';
import { TableSelectionDemo } from './tableselectiondemo';
import { TableFilterDemo } from './tablefilterdemo';
import { TableStyleDemo } from './tablestyledemo';
import { TableLazyDemo } from './tablelazydemo';
import { TableExportDemo } from './tableexportdemo';
import { TableColGroupDemo } from './tablecolgroupdemo';
import { TableRowExpansionDemo } from './tablerowexpansiondemo';
import { TableScrollDemo } from './tablescrolldemo';
import { TableVirtualScrollDemo } from './tablevirtualscrolldemo';
import { TableFlexScrollDemo } from './tableflexscrolldemo';
import { TableColToggleDemo } from './tablecoltoggledemo';
import { TableCrudDemo } from './tablecruddemo';
import { TableResponsiveDemo } from './tableresponsivedemo';
import { TableContextMenuDemo } from './tablecontextmenudemo';
import { TableColResizeDemo } from './tablecolresizedemo';
import { TableReorderDemo } from './tablereorderdemo';
import { TableEditDemo } from './tableeditdemo';
import { TableStateDemo } from './tablestatedemo';
import { TableStickyDemo } from './tablestickydemo';
import { TableRowGroupDemo } from './tablerowgroupdemo';
import { TableDemoRoutingModule } from './tabledemo-routing.module';
import { TableModule } from '@imamasurya/primeng/table';
import { SliderModule } from '@imamasurya/primeng/slider';
import { MultiSelectModule } from '@imamasurya/primeng/multiselect';
import { ContextMenuModule } from '@imamasurya/primeng/contextmenu';
import { ToastModule } from '@imamasurya/primeng/toast';
import { ButtonModule } from '@imamasurya/primeng/button';
import { CalendarModule } from '@imamasurya/primeng/calendar';
import { DialogModule } from '@imamasurya/primeng/dialog';
import { ConfirmDialogModule } from '@imamasurya/primeng/confirmdialog';
import { RatingModule } from '@imamasurya/primeng/rating';
import { DropdownModule } from '@imamasurya/primeng/dropdown';
import { InputTextModule } from '@imamasurya/primeng/inputtext';
import { InputNumberModule } from '@imamasurya/primeng/inputnumber';
import { InputTextareaModule } from '@imamasurya/primeng/inputtextarea';
import { ProgressBarModule } from '@imamasurya/primeng/progressbar';
import { TooltipModule } from '@imamasurya/primeng/tooltip';
import { RadioButtonModule } from '@imamasurya/primeng/radiobutton';
import { ToolbarModule } from '@imamasurya/primeng/toolbar';
import { FileUploadModule } from '@imamasurya/primeng/fileupload';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { ToggleButtonModule } from '@imamasurya/primeng/togglebutton';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';
import { SkeletonModule } from '@imamasurya/primeng/skeleton';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TableDemoRoutingModule,
        TableModule,
        CalendarModule,
		SliderModule,
        DialogModule,
        ConfirmDialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
        InputTextModule,
        InputNumberModule,
        InputTextareaModule,
        ProgressBarModule,
        TooltipModule,
        RadioButtonModule,
        ToolbarModule,
        FileUploadModule,
        TabViewModule,
        ToggleButtonModule,
        RatingModule,
        SkeletonModule,
        AppCodeModule,
		AppDemoActionsModule
	],
	declarations: [
		TableDemo,
		TableBasicDemo,
		TableDynamicDemo,
        TableTemplatingDemo,
        TableSizeDemo,
        TableGridLinesDemo,
        TableStripedDemo,
		TablePageDemo,
		TableSortDemo,
		TableSelectionDemo,
		TableFilterDemo,
		TableStyleDemo,
		TableLazyDemo,
		TableExportDemo,
		TableColGroupDemo,
		TableRowExpansionDemo,
        TableScrollDemo,
        TableVirtualScrollDemo,
        TableFlexScrollDemo,
		TableColToggleDemo,
		TableCrudDemo,
		TableResponsiveDemo,
		TableContextMenuDemo,
		TableColResizeDemo,
		TableReorderDemo,
		TableEditDemo,
        TableRowGroupDemo,
        TableStateDemo,
        TableStickyDemo
	]
})
export class TableDemoModule { }
