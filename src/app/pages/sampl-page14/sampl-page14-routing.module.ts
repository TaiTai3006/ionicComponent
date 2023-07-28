import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplPage14Page } from './sampl-page14.page';

const routes: Routes = [
  {
    path: '',
    component: SamplPage14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplPage14PageRoutingModule {}
