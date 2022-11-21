import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../../core/modules/core.module";

import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
