import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    BrowserAnimationsModule,
  ],
  declarations: [MainLayoutComponent],
})
export class MainModule {}
