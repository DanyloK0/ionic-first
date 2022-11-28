import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OccasionPage } from './occasion.page';

const routes: Routes = [
  {
    path: '',
    component: OccasionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OccasionPageRoutingModule {}
