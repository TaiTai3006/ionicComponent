import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamolePage12PageRoutingModule } from './samole-page12-routing.module';

import { SamolePage12Page } from './samole-page12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamolePage12PageRoutingModule
  ],
  declarations: [SamolePage12Page]
})
export class SamolePage12PageModule {}
