import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { TransferOrderRouting } from './form.routing';

import { FormComponent } from './form.component';

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
    FormComponent,
  ],
})
export class FormModule {}
