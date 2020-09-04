import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Pokemon } from "../models/pokemon";
import { POKEMONS } from "../mock-data/mock-pokemons";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public pokemonUrl = 'http://localhost:3000/api/pokemon';

  constructor(private http: HttpClient) { }
  
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl);
  }
  getPokemonById(id): Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.pokemonUrl}/${id}`);
  }
}
