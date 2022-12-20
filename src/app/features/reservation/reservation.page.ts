import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss']
})
export class ReservationPage implements OnInit {

  private map: L.Map;
  private centroid: L.LatLngExpression = [ 45.46395,  9.190530 ]; 

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  
  }
  

  ionViewWillEnter(){
    console.log("ionViewWillEnter")
}
ionViewDidEnter(){
    console.log("ionViewDidEnter")
    this.initMap();

}

  constructor() {
    this.map = null;
  }

  ngOnInit(): void {
  }


}