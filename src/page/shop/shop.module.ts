import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShopPage } from './shop';
import { HeaderModule } from '../../component/header/header.module';

import { ShopRoutingModule } from './shop-routing.module';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  page:number;
  results: any[];
  total_pages:number;
  total_results:number;
}

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeaderModule,
    ShopRoutingModule,
    HttpClientModule
  ],
  declarations: [ShopPage]
})
export class ShopModule {
  constructor(private http: HttpClient) {}

  getShopsList(page=1): Observable<ApiResult>{
    return this.http.get<ApiResult>(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`)
  }

}
