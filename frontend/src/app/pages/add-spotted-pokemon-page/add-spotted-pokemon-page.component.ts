import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from "../../services/auth.service";
import { User } from "../../models/user";
import { Pokemon } from "../../models/pokemon";

import { UserService } from '../../services/user.service';
import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: 'app-add-spotted-pokemon-page',
  templateUrl: './add-spotted-pokemon-page.component.html',
  styleUrls: ['./add-spotted-pokemon-page.component.css']
})
export class AddSpottedPokemonPageComponent implements OnInit {
  public user: User;
  public pokemonList: Pokemon[];
  public pokemon: Pokemon;
  
  addPokemonForm: FormGroup = new FormGroup({
    gender: new FormControl('')
   });

  constructor(private userService: UserService,
              private pokemonService: PokemonService) { }

  get pokemonObj(): any {
    return this.addPokemonForm.get('pokemon').value;
  }

  ngOnInit(): void {
    
  }
  loadPokemons(): void{
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemonList = pokemons);
  }
}
