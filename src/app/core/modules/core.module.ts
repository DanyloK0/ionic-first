import { TopbarComponent } from './../components/topbar/topbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from '../components/body/body.component';
import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';

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
