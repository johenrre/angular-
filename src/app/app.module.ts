import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { RegisterComponent } from './register/register.component';
import { InputComponent } from './input/input.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { GridComponent } from './grid/grid.component';
import { NumInputComponent } from './num-input/num-input.component';
import { InputValidateComponent } from './input-validate/input-validate.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { ModalComponent } from './modal/modal.component';
import { UniqueAlterEgoValidatorDirective } from './input/alter-ego.directive';
import { ChartsComponent } from './charts/charts.component';
import { LineChartModule } from '@swimlane/ngx-charts';


import { ChartsModule } from './charts/charts.module';

import { NgxEchartsModule } from 'ngx-echarts';
import { DirectiveTestComponent } from './directive-test/directive-test.component';
import {GreetDirective} from './directive-test/geek.directive';


registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    InputComponent,
    GridComponent,
    NumInputComponent,
    InputValidateComponent,
    TimePickerComponent,
    ModalComponent,
    UniqueAlterEgoValidatorDirective,
    ChartsComponent,
    DirectiveTestComponent,
    GreetDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxEchartsModule,
    ChartsModule,
    LineChartModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
