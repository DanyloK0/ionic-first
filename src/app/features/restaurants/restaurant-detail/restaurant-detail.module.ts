import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantDetailPageRoutingModule } from './restaurant-detail-routing.module';

import { RestaurantDetailPage } from './restaurant-detail.page';
import { CrudService } from 'src/app/shared/services/crud.service';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/shared/interceptors/auth.interceptor';
import { LoaderInterceptor } from 'src/app/shared/interceptors/loader.interceptor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantDetailPageRoutingModule
  ],
  declarations: [RestaurantDetailPage]
})
export class RestaurantDetailPageModule {}
