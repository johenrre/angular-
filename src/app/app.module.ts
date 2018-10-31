import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppRouting } from './app.routing';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRouting],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule {}
