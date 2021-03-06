import { Injectable } from '@angular/core';
import * as Leaflet from 'leaflet';
import { User } from '../models/user';
import { UserService } from './user.service';

const PokemonIcons = Leaflet.Icon.extend({
  options: {
    iconSize: [70, 70]
  }
});

@Injectable({
  providedIn: 'root'
})
export class MapService {
  public marker: any;

  constructor(private userService: UserService) { }

  /**
   * Populate the map with found pokemon by current user
   * @param user current user
   * @param map map
   */
  public populatePokemonByUser(user: User, map: any): void {
    if (user && map) {
      user.found_pokemon.forEach(pokemon => {
        Leaflet.marker([pokemon.latitude, pokemon.longitude],
          {icon: new PokemonIcons({iconUrl: pokemon.sprite, icon: pokemon.sprite})}).addTo(map);
      });
    }
  }

  /**
   * Populate map with pokemon from all users
   * @param map map
   */
  public populatePokemonByAllUsers(map: any): void {
    if (map) {
      this.userService.getUsers().subscribe(users => users.forEach(user => this.populatePokemonByUser(user, map)));
    }
  }

  /**
   * Set pokemon marker in map, remove if set new marker
   */
  public setMarker(map: any, imageUrl: string, latlng: any): void {
    if (imageUrl && map && latlng) {
      const newMarker = new Leaflet.marker([latlng.lat, latlng.lng], {icon: new PokemonIcons({iconUrl: imageUrl, icon: imageUrl})});
      if (this.marker) { map.removeLayer(this.marker); }
      this.marker = newMarker;
      newMarker.addTo(map);
    }
  }

}

