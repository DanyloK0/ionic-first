import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../../core/modules/core.module";
import { SharedModule } from "../../shared/modules/shared.module";

import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { UsersComponent } from './pages/users/users.component';


@NgModule({
  declarations: [
    UserComponent,
    UsersComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
