import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplPage15Page } from './sampl-page15.page';

const routes: Routes = [
  {
    path: '',
    component: SamplPage15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplPage15PageRoutingModule {}
