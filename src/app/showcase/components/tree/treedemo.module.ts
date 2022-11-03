import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreeDemo } from './treedemo';
import { TreeTemplatingDemo } from './treetemplatingdemo';
import { TreeSelectionDemo } from './treeselectiondemo';
import { TreeFilterDemo } from './treefilterdemo';
import { TreeScrollDemo } from './treescrolldemo';
import { TreeLazyDemo } from './treelazydemo';
import { TreeContextMenuDemo } from './treecontextmenudemo';
import { TreeDragDropDemo } from './treedragdropdemo';
import { TreeHorizontalDemo } from './treehorizontaldemo';
import { TreeDemoRoutingModule } from './treedemo-routing.module';
import { TreeModule } from '@imamasurya/primeng/tree';
import { ToastModule } from '@imamasurya/primeng/toast';
import { ButtonModule } from '@imamasurya/primeng/button';
import { DialogModule } from '@imamasurya/primeng/dialog';
import { ContextMenuModule } from '@imamasurya/primeng/contextmenu';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, FormsModule, TreeDemoRoutingModule, TreeModule, ToastModule, ButtonModule, DialogModule, ContextMenuModule, TabViewModule, AppCodeModule, AppDemoActionsModule],
    declarations: [TreeDemo, TreeTemplatingDemo, TreeSelectionDemo, TreeFilterDemo, TreeLazyDemo, TreeScrollDemo, TreeContextMenuDemo, TreeDragDropDemo, TreeHorizontalDemo]
})
export class TreeDemoModule {}
