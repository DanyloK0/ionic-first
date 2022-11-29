import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.page.html',
  styleUrls: ['./restaurant-detail.page.scss'],
})
export class RestaurantDetailPage implements OnInit {
  detail= null;

  constructor(private route: ActivatedRoute, private service: CrudService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.service.getRestaurantsDetail(id).subscribe((res)=>{
      console.log(res);
      this.detail = res;
    })
  }
}
