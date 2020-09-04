import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from "src/app/models/pokemon";
import { PokemonService } from "src/app/services/pokemon.service";
import { ModifyObjectService } from "../../services/modify-object.service";
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-user-start-page',
  templateUrl: './user-start-page.component.html',
  styleUrls: ['./user-start-page.component.css']
})
export class UserStartPageComponent implements OnInit {

  public pokemons: Pokemon[];
  public user: any;

  constructor(public pokemonService: PokemonService ,private modifyObjectService : ModifyObjectService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  sortPokemonBySpotted() {
    if(!this.pokemons) return;

    return this.pokemons.sort(this.modifyObjectService.sortByField("spotted"));
  }
  filterTopTenSpotted() {
    if(!this.pokemons) return;
    return this.pokemons.sort(this.modifyObjectService.sortByField("spotted")).slice(0,10)
  }
  
  getPokemons() : void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }
  

}
