import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplPage13Page } from './sampl-page13.page';

const routes: Routes = [
  {
    path: '',
    component: SamplPage13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplPage13PageRoutingModule {}
