import { Component, OnInit } from '@angular/core';
import  * as Leaflet from "leaflet";

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {
  public map: any;

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.initMap();
  }
  initMap(): void {
    this.map = Leaflet.map('map', {
      center: [39.8232, -98, 5795],
      zoom: 6
    });
    const tiles = Leaflet.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }
    );
    tiles.addTo(this.map);
  }
}
