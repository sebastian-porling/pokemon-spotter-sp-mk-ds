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
  constructor(public userService: UserService,public pokemonService: PokemonService,private modifyObjectService : ModifyObjectService) { }

  ngOnInit(): void {
    this.getUsers();
    //this.sortAndFilterTopTenUsersByScore();
    this.getPokemons();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  } 
  filterTopTen() {
    if(!this.users) return;
    return this.users.sort(this.modifyObjectService.sortByField("score")).slice(0,10)
  }

  // sortAndFilterTopTenUsersByScore() {
  //   let sorteredList = this.users.sort((a, b) => b.score - a.score);
  //   this.topTen = sorteredList.slice(0, 10);
  // }
  
  getPokemons() : void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }

}
