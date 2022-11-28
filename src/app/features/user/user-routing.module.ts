import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersPage } from "./pages/users/users.page";

const routes: Routes = [
  { path: '', component: UsersPage, children:
    [
      { path: '', redirectTo: '', pathMatch: 'full', component: UsersPage },
      { path: '', component: UsersPage }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
