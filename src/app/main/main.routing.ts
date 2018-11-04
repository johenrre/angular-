import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { MainGuard } from './main.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [MainGuard],
    component: MainLayoutComponent,
    children: [
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: '',
      // },
      // {
      //   path: '',
      //   children: [
      //   ],
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MainGuard],
})
export class MainRouting {}
