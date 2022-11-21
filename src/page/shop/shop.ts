import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ShopModule } from './shop.module';

@Component({
  selector: 'app-shop',
  templateUrl: 'shop.html',
  styleUrls: ['shop.scss']
})
export class ShopPage implements OnInit {

  shops = [];
  currentPage = 1;
  imageBaseUrl = environment.images;


  constructor(private shopModule: ShopModule, private loadingCtrl:LoadingController) {}

  ngOnInit(){
    this.loadShops();
  };
  
  async loadShops(event?){
    const loading = await this.loadingCtrl.create({
      message:'Loading..', spinner:'circular'
    });
    await loading.present();

    this.shopModule.getShopsList(this.currentPage).subscribe(res=>{
      loading.dismiss();
      this.shops.push(...res.results);
      console.log(res)
      event?.target.complete();
      if(event){
        event.target.disabled = res.total_pages === this.currentPage
      };
    });

  };

  loadMore(event:InfiniteScrollCustomEvent){
    this.currentPage++;
    this.loadShops(event);
  }
  
}
