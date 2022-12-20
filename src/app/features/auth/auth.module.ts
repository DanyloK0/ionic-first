import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { LoginPage } from './pages/login/login.page';
import { IonicModule } from '@ionic/angular';
import { CoreModule } from 'src/app/core/modules/core.module';
import { RegistrationPage } from './pages/registration/registration.page';


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
