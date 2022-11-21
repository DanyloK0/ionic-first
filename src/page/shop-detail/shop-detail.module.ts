import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShopDetailPage } from './shop-detail';
import { HeaderModule } from '../../component/header/header.module';

import { ShopDetailRoutingModule } from './shop-detail-routing.module';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderModule,
    ShopDetailRoutingModule,
    HttpClientModule
  ],
  declarations: [ShopDetailPage]
})
export class ShopDetailModule {
  constructor(private http: HttpClient) {}

  getShopDetail(id:string){
    return this.http.get(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`)
  }
}
