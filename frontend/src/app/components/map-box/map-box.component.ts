import { Component, OnInit } from '@angular/core';
import  * as Leaflet from "leaflet";
import { Pokemon } from "../../models/pokemon";
import { POKEMONS } from "../../mock-data/mock-pokemons";


@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {
  public map: any;

  constructor() {}

  ngOnInit(): void {
    this.initMap();
    this.locatePokemons();
  }
  
  // ngAfterViewInit(): void {
    
  // }
  initMap(): void {
    
    this.map = Leaflet.map('map', {
      center: [39.8232, -98,5795],
      zoom: 6
    });
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
      {
        maxZoom: 19
      }).addTo(this.map);
  }
  locatePokemons(): void{
    Leaflet.circleMarker([39.8232, -98,5795]).addTo(this.map);
    Leaflet.circleMarker([38.8232, -98,5795]).addTo(this.map);
    Leaflet.circleMarker([37.8232, -98,5795]).addTo(this.map);
    Leaflet.circleMarker([36.8232, -98,5795]).addTo(this.map);

  }

}
