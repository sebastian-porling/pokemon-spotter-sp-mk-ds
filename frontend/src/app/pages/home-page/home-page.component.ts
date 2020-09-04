import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ModifyObjectService } from '../../services/modify-object.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public users: User[];
  public allPokemon: Pokemon[];
  topTen = this.users;

  constructor(
    private userService: UserService,
    private pokemonService: PokemonService,
    private modifyObjectService: ModifyObjectService
  ) { }

  /**
   * Setup users and pokemon
   */
  ngOnInit(): void {
    this.getUsers();
    this.getAllPokemon();
  }

  /**
   * Fetch all users
   */
  getUsers(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  /**
   * Fetch all pokemon
   */
  getAllPokemon(): void {
    this.pokemonService
      .getAllPokemon()
      .subscribe((pokemon) => (this.allPokemon = pokemon));
  }

  /**
   * Filter top ten users
   */
  filterTopTen(): User[] {
    if (this.users) {
      return this.users
        .sort(this.modifyObjectService.sortByField('score'))
        .slice(0, 10);
    }
  }

}
