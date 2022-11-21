import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../../component/header/header.module';

import { OccasionRoutingModule } from './occasion-routing.module';
import { OccasionPage } from './occasion';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderModule,
    OccasionRoutingModule
  ],
  declarations: [OccasionPage]
})
export class OccasionModule {}
