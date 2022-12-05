import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationPage } from './registration';

import { RegistrationRoutingModule } from './registration-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RegistrationRoutingModule
  ],
  declarations: [RegistrationPage]
})
export class RegistrationModule {}
