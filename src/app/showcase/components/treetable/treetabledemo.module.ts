import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeTableDemo } from './treetabledemo';
import { TreeTableDemoRoutingModule } from './treetabledemo-routing.module';
import { TreeTableModule } from '@imamasurya/primeng/treetable';
import { TreeTablePageDemo } from './treetablepagedemo';
import { TreeTableSortDemo } from './treetablesortdemo';
import { TreeTableSelectionDemo } from './treetableselectiondemo';
import { TreeTableStyleDemo } from './treetablestyledemo';
import { TreeTableLazyDemo } from './treetablelazydemo';
import { TreeTableColGroupDemo } from './treetablecolgroupdemo';
import { TreeTableTemplatingDemo } from './treetabletemplatingdemo';
import { TreeTableScrollDemo } from './treetablescrolldemo';
import { TreeTableFlexScrollDemo } from './treetableflexscrolldemo';
import { TreeTableColToggleDemo } from './treetablecoltoggledemo';
import { TreeTableResponsiveDemo } from './treetableresponsivedemo';
import { TreeTableContextMenuDemo } from './treetablecontextmenudemo';
import { TreeTableColResizeDemo } from './treetablecolresizedemo';
import { TreeTableReorderDemo } from './treetablereorderdemo';
import { TreeTableEditDemo } from './treetableeditdemo';
import { TreeTableFilterDemo } from './treetablefilterdemo';
import { TreeTableSizeDemo } from './treetablesizedemo';
import { ToastModule } from '@imamasurya/primeng/toast';
import { DialogModule } from '@imamasurya/primeng/dialog';
import { ButtonModule } from '@imamasurya/primeng/button';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { MultiSelectModule } from '@imamasurya/primeng/multiselect';
import { InputTextModule } from '@imamasurya/primeng/inputtext';
import { ContextMenuModule } from '@imamasurya/primeng/contextmenu';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, FormsModule, TreeTableDemoRoutingModule, TreeTableModule, ToastModule, DialogModule, ButtonModule, TabViewModule, MultiSelectModule, InputTextModule, ContextMenuModule, AppCodeModule, AppDemoActionsModule],
    declarations: [
        TreeTableDemo,
        TreeTablePageDemo,
        TreeTableSortDemo,
        TreeTableSelectionDemo,
        TreeTableTemplatingDemo,
        TreeTableStyleDemo,
        TreeTableLazyDemo,
        TreeTableColGroupDemo,
        TreeTableScrollDemo,
        TreeTableFlexScrollDemo,
        TreeTableColToggleDemo,
        TreeTableResponsiveDemo,
        TreeTableContextMenuDemo,
        TreeTableColResizeDemo,
        TreeTableReorderDemo,
        TreeTableEditDemo,
        TreeTableFilterDemo,
        TreeTableSizeDemo
    ]
})
export class TreeTableDemoModule {}
