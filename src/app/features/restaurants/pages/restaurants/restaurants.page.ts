import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { CrudService } from 'src/app/shared/services/crud.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage {
  private mapbox: mapboxgl.Map;
  restaurants: any[] = [];

  constructor( private service: CrudService, private loadingCtrl: LoadingController ) {
		mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  ngOnInit(){
    this.getAllRestaurants();

    this.mapbox = new mapboxgl.Map({
			container: 'mapbox',
			style: `mapbox://styles/danylok/clbmhb2fo000816qtvn3m9vdl`,
			zoom: 15,
			center: [ 9.190530, 45.46395 ],
      
		});
    
  }

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
