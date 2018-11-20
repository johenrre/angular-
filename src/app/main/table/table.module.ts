import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { TransferOrderRouting } from './table.routing';

import { TableComponent } from './table.component';

import { YuanPipe } from './yuan.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    TransferOrderRouting,
  ],
  declarations: [
    TableComponent,
    YuanPipe,
  ],
  exports: [YuanPipe],
})
export class TableModule {}
