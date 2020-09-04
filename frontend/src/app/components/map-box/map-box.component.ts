import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as Leaflet from 'leaflet';
import { User } from '../../models/user';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {
  public map: any;
  private stockholmCoordinates: any = [59.334591, 18.063240];
  @Input() imageUrl: string;
  @Output() clickAttempt: EventEmitter<any> = new EventEmitter();

  constructor(private mapService: MapService) { }

  /**
   * Setup map, click event and populate map
   */
  ngOnInit(): void {
    this.initMap();
    this.populateAllPokemon();
    this.map.on('click', e => {
      this.clickAttempt.emit(e.latlng);
      this.mapService.setMarker(this.map, this.imageUrl, e.latlng);
    });
  }

  /**
   * Setup map on stockholm
   */
  initMap(): void {
    this.map = Leaflet.map('map', {
      center: this.stockholmCoordinates,
      zoom: 12
    });
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19
      }).addTo(this.map);
  }

  /**
   * Populate map with pokemon from one user
   */
  populateUsersPokemon(user: User): void {
    if (this.map){
      this.mapService.populatePokemonByUser(user, this.map);
    }
  }

  /**
   * Populate map with pokemon markers with pokemon from all users
   */
  populateAllPokemon(): void {
    if (this.map) {
      this.mapService.populatePokemonByAllUsers(this.map);
    }
  }
}
