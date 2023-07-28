import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamplPage16PageRoutingModule } from './sampl-page16-routing.module';

import { SamplPage16Page } from './sampl-page16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamplPage16PageRoutingModule
  ],
  declarations: [SamplPage16Page]
})
export class SamplPage16PageModule {}
