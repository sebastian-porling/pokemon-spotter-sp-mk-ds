import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../../models/pokemon";
import { PokemonService } from "src/app/services/pokemon.service";

@Component({
  selector: 'app-add-spotted-page',
  templateUrl: './add-spotted-page.component.html',
  styleUrls: ['./add-spotted-page.component.css']
})
export class AddSpottedPageComponent implements OnInit {

  public pokemons: Pokemon[];
  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }
  getPokemons() : void {
    this.pokemonService.getPokemons()
       .subscribe(pokemons => this.pokemons = pokemons);
  }

}
