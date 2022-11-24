import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantComponent } from './restaurant.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { RestaurantsPage } from './restaurants/restaurants.page';

const routes: Routes = [
  { path: '', component: RestaurantsPage, children:
    [
      { path: '', redirectTo: '', pathMatch: 'full', component: RestaurantsPage },
      { path: '', component: RestaurantsPage }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
