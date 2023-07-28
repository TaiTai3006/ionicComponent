import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplPage14PageRoutingModule } from './sampl-page14-routing.module';

import { SamplPage14Page } from './sampl-page14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplPage14PageRoutingModule
  ],
  declarations: [SamplPage14Page]
})
export class SamplPage14PageModule {}
