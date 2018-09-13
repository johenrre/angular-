import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from '../register/register.component';
import { InputComponent } from '../input/input.component';
import { GridComponent } from '../grid/grid.component';
import { NumInputComponent } from '../num-input/num-input.component';
import { TimePickerComponent } from '../time-picker/time-picker.component';
import { ModalComponent } from '../modal/modal.component';
import { ChartsComponent } from '../charts/charts.component';
import { TableComponent } from '../table/table.component';
import { DirectiveTestComponent } from '../directive-test/directive-test.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'inputDemo', component: InputComponent },
  { path: 'grid', component: GridComponent },
  { path: 'numInput', component: NumInputComponent },
  { path: 'timePicker', component: TimePickerComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'chart', component: ChartsComponent },
  { path: 'directive', component: DirectiveTestComponent },
  { path: 'table', component: TableComponent },
  { path: '', redirectTo: '/inputDemo', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
