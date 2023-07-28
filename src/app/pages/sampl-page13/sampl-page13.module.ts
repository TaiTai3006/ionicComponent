import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplPage13PageRoutingModule } from './sampl-page13-routing.module';

import { SamplPage13Page } from './sampl-page13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplPage13PageRoutingModule
  ],
  declarations: [SamplPage13Page]
})
export class SamplPage13PageModule {}
