import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import  * as Leaflet from "leaflet";
import { User } from "../../models/user";
import { MapService } from "../../services/map.service";
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {
  public map: any;

  //Start value Stocholm
  public lat: number = 59.334591;
  public lng: number = 18.063240;

  constructor(private mapService: MapService) {}

  @Input() imageUrl: string;

  @Output() clickAttempt: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.initMap();
    this.populateAllPokemons();

    this.map.on('click', e => {
      this.clickAttempt.emit(e.latlng);
      this.mapService.setMarker(this.map, this.imageUrl, e.latlng);
    })
  }
  
  initMap(): void {
    this.map = Leaflet.map('map', {
      center: [this.lat, this.lng],
      zoom: 12
    });
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
      {
        maxZoom: 19
      }).addTo(this.map);
  }
  populateUsersPokemons(user: User): void{
      this.mapService.populatePokemonByUser(user, this.map);
  }
  populateAllPokemons() :void{
      this.mapService.populatePokemonByAllUsers(this.map);
  }
}
