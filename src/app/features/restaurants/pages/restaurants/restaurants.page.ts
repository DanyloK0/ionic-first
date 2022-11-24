import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage {
  
  restaurants: any[] = [];

  constructor(
    private crudService: CrudService
  ) {
  }

  ionViewWillEnter(): void {
    this.getAllRestaurants();
  }

  getAllRestaurants() {
    this.crudService.getRestaurants().subscribe({
      next: (data: any) => {
        this.restaurants = data.list;
        console.log(this.restaurants);
      },
      error: (err: any) => {}
    })
  }

  updateList(list: any) {
    this.restaurants = list;
  }
}
