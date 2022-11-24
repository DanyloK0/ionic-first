import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/shared/services/crud.service';

@Component({
  selector: 'app-restaurants.page',
  templateUrl: 'restaurants.page.html',
  styleUrls: ['shop.scss']
})
export class RestaurantsPage implements OnInit {
  restaurants: any[] = [];

  constructor(
    private crudService: CrudService
  ) {
  }

  ngOnInit(): void {
    this.getAllRestaurants();
  }

  getAllRestaurants() {
    this.crudService.getAll().subscribe({
      next: (data: any) => {
        this.restaurants = data.list;
        console.log(this.restaurants, 'log');
      },
      error: (err: any) => {}
    });
  }

  updateList(list: any) {
    this.restaurants = list;
  }
}
