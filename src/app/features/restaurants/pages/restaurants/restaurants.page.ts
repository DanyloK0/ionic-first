import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { CrudService } from 'src/app/shared/services/crud.service';
import { RestaurantService } from 'src/app/shared/services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage {
  
  restaurants: any[] = [];

  constructor( private service: CrudService, private loadingCtrl: LoadingController ) {}

  ngOnInit(){ this.getAllRestaurants() }

  async getAllRestaurants() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    });
    await loading.present();

    this.service.getRestaurants().subscribe({
      next: (data: any) => {
        loading.dismiss()
        this.restaurants = data.list;
        console.log(this.restaurants);
      },
      error: (err: any) => {
        loading.dismiss();
        console.log(err)
      }
    })
  }

  loadMore(event: InfiniteScrollCustomEvent){
    this.getAllRestaurants();
  }

  updateList(list: any) {
    this.restaurants = list;
  }
}
