import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user.component';
import { UsersComponent } from "./pages/users/users.component";

const routes: Routes = [
  { path: '', component: UserComponent, children:
    [
      { path: '', redirectTo: '', pathMatch: 'full', component: UsersComponent },
      { path: '', component: UsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
