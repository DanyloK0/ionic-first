import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationModule } from 'src/app/features/auth/pages/registration/registration.module';
import { LoginPageModule } from './pages/login/login.module';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: LoginPage },
  { path: 'login', component: LoginPage },
  { path: 'registration', component: RegistrationModule },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
