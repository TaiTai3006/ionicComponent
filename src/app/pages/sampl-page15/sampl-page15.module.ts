import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplPage15PageRoutingModule } from './sampl-page15-routing.module';

import { SamplPage15Page } from './sampl-page15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplPage15PageRoutingModule
  ],
  declarations: [SamplPage15Page]
})
export class SamplPage15PageModule {}
