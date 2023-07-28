import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamolePage12Page } from './samole-page12.page';

const routes: Routes = [
  {
    path: '',
    component: SamolePage12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamolePage12PageRoutingModule {}
