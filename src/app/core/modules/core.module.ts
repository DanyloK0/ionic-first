import { TopbarComponent } from './../components/topbar/topbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/modules/shared.module";

import { BodyComponent } from "../components/body/body.component";
import { SidenavComponent } from "../components/sidenav/sidenav.component";

@NgModule({
  declarations: [
    BodyComponent,
    SidenavComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BodyComponent,
    SidenavComponent,
    TopbarComponent
  ]
})
export class CoreModule { }
