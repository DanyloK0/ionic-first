import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../../core/modules/core.module";

import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { LoginPage } from './pages/login/login.page';
import { RegistrationPage } from './pages/registration/registration';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    AuthComponent,
    LoginPage,
    RegistrationPage
  ],
  imports: [
    IonicModule,
    CoreModule,
    SharedModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
