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

  constructor(private userService: UserService) { }

  public populatePokemonByUser(user: User, map: any){
    user.found_pokemon.forEach(pokemon => {
      Leaflet.marker([pokemon.latitude, pokemon.longitude], {icon: new PokemonIcons({iconUrl: pokemon.sprite, icon:pokemon.sprite})}).addTo(map);
  });
  }
  public populatePokemonByAllUsers(map: any){
    this.userService.getUsers().subscribe(users => users.forEach(user => this.populatePokemonByUser(user, map)));
  }
}

