import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OccasionPageRoutingModule } from './occasion-routing.module';

import { OccasionPage } from './occasion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OccasionPageRoutingModule
  ],
  declarations: [OccasionPage]
})
export class OccasionPageModule {}
