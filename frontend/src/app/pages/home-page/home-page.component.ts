import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Pokemon } from "src/app/models/pokemon";
import { PokemonService } from "src/app/services/pokemon.service";
import { ModifyObjectService } from "../../services/modify-object.service";
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public users: User[];
  public pokemons: Pokemon[];

  topTen = this.users;
  constructor(private userService: UserService,private pokemonService: PokemonService,
              private modifyObjectService : ModifyObjectService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getPokemons();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  } 
  
  getPokemons() : void {
    this.pokemonService.getAllPokemon()
      .subscribe(pokemons => this.pokemons = pokemons);
  }
  filterTopTen() {
    if(this.users)
      return this.users.sort(this.modifyObjectService.sortByField("score")).slice(0,10)
  }
}
