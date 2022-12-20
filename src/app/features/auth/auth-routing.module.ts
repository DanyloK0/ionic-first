import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { RegistrationPageModule } from './pages/registration/registration.module';
import { RegistrationPage } from './pages/registration/registration.page';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: LoginPage },
  { path: 'login', component: LoginPage },
  { path: 'registration', component: RegistrationPage },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
