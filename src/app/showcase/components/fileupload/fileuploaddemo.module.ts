import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadDemo } from './fileuploaddemo';
import { FileUploadDemoRoutingModule } from './fileuploaddemo-routing.module';
import { FileUploadModule } from '@imamasurya/primeng/fileupload';
import { ToastModule } from '@imamasurya/primeng/toast';
import { ButtonModule } from '@imamasurya/primeng/button';
import { TabViewModule } from '@imamasurya/primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, FileUploadDemoRoutingModule, FileUploadModule, ToastModule, ButtonModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [FileUploadDemo]
})
export class FileUploadDemoModule {}
