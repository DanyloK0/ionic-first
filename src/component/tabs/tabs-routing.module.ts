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
        loadChildren: () => import('../../app/features/reservation/reservation.module').then(m => m.ReservationPageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../../app/features/notification/notification.module').then(m => m.NotificationPageModule)
      },
      {
        path: 'occasion',
        loadChildren: () => import('../../app/features/occasion/occasion.module').then(m => m.OccasionPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../..//app/features/profile/profile.module').then(m => m.ProfilePageModule)
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
