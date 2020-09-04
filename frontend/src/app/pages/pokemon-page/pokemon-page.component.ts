import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css'],
})
export class PokemonPageComponent implements OnInit {
  public allPokemon: Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  /**
   * Setup all pokemon
   */
  ngOnInit(): void {
    this.getAllPokemon();
  }

  /**
   * Fetch all pokemon
   */
  getAllPokemon(): void {
    this.pokemonService
      .getAllPokemon()
      .subscribe((pokemons) => (this.allPokemon = pokemons));
  }
}
