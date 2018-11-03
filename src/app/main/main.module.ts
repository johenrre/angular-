import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { MainRouting } from './main.routing';

import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  imports: [
    CommonModule,
    MainRouting,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [MainLayoutComponent],
})
export class MainModule {}
