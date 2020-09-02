import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Pokemon } from "src/app/models/pokemon";
import { PokemonService } from "src/app/services/pokemon.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public users: User[];
  public pokemons: Pokemon[];


  userListByScore = this.users;
  topTen = this.users;
  constructor(public userService: UserService,public pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getUsers();
    this.sortusersByScore();
    this.filterTopTen();
    this.getPokemons();

  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  } 

  sortusersByScore() {
    this.userListByScore = this.users.sort((a, b) => b.score - a.score);
  }

  filterTopTen() {
    this.topTen = this.userListByScore.slice(0, 10);
  }
  getPokemons() : void {
    this.pokemonService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons);
  }

}
