import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminsComponent } from "./pages/admins/admins.component";

const routes: Routes = [
  { path: '', component: AdminComponent, children:
    [
      { path: '', redirectTo: '', pathMatch: 'full', component: AdminsComponent },
      { path: 'admins', component: AdminsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
