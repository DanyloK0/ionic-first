import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from "../../core/modules/core.module";
import { SharedModule } from "../../shared/modules/shared.module";

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { AdminsComponent } from './pages/admins/admins.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminsComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
