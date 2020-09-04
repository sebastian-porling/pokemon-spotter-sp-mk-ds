import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    gender: new FormControl('', [Validators.required]),
    shiny: new FormControl('', [Validators.required]),
    latitude: new FormControl('', [Validators.required]),
    longitude: new FormControl('', [Validators.required])
   });

  constructor(private userService: UserService,
              private pokemonService: PokemonService) { }

  get gender(): any {
    return this.addPokemonForm.get('pokemon').value;
  }
  get shiny(): any{
    return this.addPokemonForm.get('shiny').value;
  }
  get latitude(): any {
    return this.addPokemonForm.get('latitude').value;
  }
  get longitude(): any{
    return this.addPokemonForm.get('longitude').value;
  }

  ngOnInit(): void {
    this.loadPokemons();
  }
  loadPokemons(): void{
    this.pokemonService.getAllPokemon().subscribe(pokemons => this.pokemonList = pokemons);
  } 
  onClickPokemon(pokemon): void{
    this.addPokemonForm.reset();
    this.pokemon = pokemon;
  }
  onSubmit() :void{
    const formValues = this.addPokemonForm.value;
    this.userService.addPokemonToUser({
      gender: formValues.gender,
      shiny: formValues.shiny,
      latitude: formValues.latitude,
      longitude: formValues.longitude,
      id: this.pokemon.id,
      sprite: this.pokemon.sprite,
      name: this.pokemon.name
    }).then(res => console.log(res)).catch(res => console.log(res));
  }
}
