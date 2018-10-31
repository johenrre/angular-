import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { LoginComponent } from './login.component';
import { LoginRouting } from './login.routing';

@NgModule({
  imports: [CommonModule, LoginRouting, ReactiveFormsModule, NgZorroAntdModule],
  declarations: [LoginComponent],
})
export class LoginModule {}
