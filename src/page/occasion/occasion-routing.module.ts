import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OccasionPage } from './occasion';

const routes: Routes = [
  {
    path: '',
    component: OccasionPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OccasionRoutingModule {}
