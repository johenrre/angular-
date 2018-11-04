import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { MainRouting } from './main.routing';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MenusComponent } from './main-layout/menu/menus.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MainRouting,
  ],
  declarations: [MainLayoutComponent, MenusComponent],
})
export class MainModule {}
