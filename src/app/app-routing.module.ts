import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: '', loadChildren: () => import('../component/tabs/tabs.module').then(m => m.TabsPageModule)},
  {
    path: 'restaurants',
    loadChildren: () => import('./features/restaurants/pages/restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./features/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'occasion',
    loadChildren: () => import('./features/occasion/occasion.module').then( m => m.OccasionPageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./features/reservation/reservation.module').then( m => m.ReservationPageModule)
  },
  {
    path: 'restaurants/:id',
    loadChildren: () => import('./features/restaurants/restaurant-detail/restaurant-detail.module').then( m => m.RestaurantDetailPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./features/auth/pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/pages/login/login.module').then( m => m.LoginPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
