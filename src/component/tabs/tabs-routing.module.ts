import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'restaurants',
        loadChildren: () => import('../../app/features/restaurants/pages/restaurants/restaurants.module').then(m => m.RestaurantsPageModule)
      },
      {
        path: 'restaurants/:id',
        loadChildren: () => import('../../app/features/restaurants/restaurant-detail/restaurant-detail.module').then( m => m.RestaurantDetailPageModule)
      },
      {
        path: 'reservation',
        loadChildren: () => import('../../page/reservation/reservation.module').then(m => m.ReservationModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../../page/notification/notification.module').then(m => m.NotificationModule)
      },
      {
        path: 'occasion',
        loadChildren: () => import('../../page/occasion/occasion.module').then(m => m.OccasionModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../../page/profile/profile.module').then(m => m.ProfileModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '  /login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
})
export class TabsPageRoutingModule {}
