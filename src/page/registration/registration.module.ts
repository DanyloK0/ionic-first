import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationPage } from './registration';
import { HeaderModule } from '../../component/header/header.module';

import { RegistrationRoutingModule } from './registration-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderModule,
    RegistrationRoutingModule
  ],
  declarations: [RegistrationPage]
})
export class RegistrationModule {}
