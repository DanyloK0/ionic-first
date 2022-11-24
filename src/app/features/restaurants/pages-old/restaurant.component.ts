import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  screenWidth = 0;

  constructor() { }

  ngOnInit(): void { }

  // onToggleSideNav(data: SidenavToggle): void {
  //   this.screenWidth = this.screenWidth;
  //   this.isSideNavCollapsed = data.collapsed;
  // }
}
