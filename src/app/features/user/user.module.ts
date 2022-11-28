import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UsersPage } from './pages/users/users.page';
import { HeaderModule } from 'src/component/header/header.module';
import { CoreModule } from 'src/app/core/modules/core.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    UsersPage,
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
  ],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
