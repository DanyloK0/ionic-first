import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from 'src/component/header/header.module';
import { RestaurantsPage } from './restaurants/restaurants.page';
import { RestaurantRoutingModule } from './restaurant-routing.module';




@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderModule,
    RestaurantRoutingModule,
    HttpClientModule
  ],
  declarations: [RestaurantsPage]
})
export class RestaurantsModule {
  constructor(private http: HttpClient) {}

}
