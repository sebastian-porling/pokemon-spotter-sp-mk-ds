import { Injectable } from '@angular/core';
import  * as Leaflet from "leaflet";
import { User } from "../models/user";
import { UserService } from './user.service';

let PokemonIcons = Leaflet.Icon.extend({
  options: {
    iconSize: [70,70]
  }
})

@Injectable({
  providedIn: 'root'
})
export class MapService {

  public marker: any;

  constructor(private userService: UserService) { }

  public populatePokemonByUser(user: User, map: any){
    user.found_pokemon.forEach(pokemon => {
      Leaflet.marker([pokemon.latitude, pokemon.longitude], {icon: new PokemonIcons({iconUrl: pokemon.sprite, icon:pokemon.sprite})}).addTo(map);
  });
  }
  public populatePokemonByAllUsers(map: any){
    this.userService.getUsers().subscribe(users => users.forEach(user => this.populatePokemonByUser(user, map)));
  }
  public setMarker(map: any, imageUrl: string, latlng: any){
    if(imageUrl === undefined)
      return;
    let newMarker = new Leaflet.marker([latlng.lat, latlng.lng], {icon: new PokemonIcons({iconUrl: imageUrl, icon:imageUrl})});
    if(this.marker) 
      map.removeLayer(this.marker);
    
    this.marker = newMarker; 
    newMarker.addTo(map);
  }
 
}

