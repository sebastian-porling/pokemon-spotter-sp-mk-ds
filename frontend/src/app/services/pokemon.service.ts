import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Pokemon } from "../models/pokemon";
import { POKEMONS } from "../mock-data/mock-pokemons";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemons(): Observable<Pokemon[]> {
    return of(POKEMONS);
  }
}
