import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ShopDetailModule } from './shop-detail.module';
// import { ShopDetailModule } from './shop-detail.module';

@Component({
  selector: 'app-shop-detail',
  templateUrl: 'shop-detail.html',
  styleUrls: ['shop-detail.scss']
})
export class ShopDetailPage implements OnInit {
  item = null;
  imageBaseUrl = environment.images

  constructor(private route: ActivatedRoute, private shopModule: ShopDetailModule) {}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.shopModule.getShopDetail(id).subscribe((res)=>{
      console.log(res);
      this.item = res;
    })
  }

}
