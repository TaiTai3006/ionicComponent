import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplPage16Page } from './sampl-page16.page';

const routes: Routes = [
  {
    path: '',
    component: SamplPage16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplPage16PageRoutingModule {}
