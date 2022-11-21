import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../../component/header/header.module';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationPage } from './reservation';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderModule,
    ReservationRoutingModule
  ],
  declarations: [ReservationPage]
})
export class ReservationModule {}
