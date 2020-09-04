import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public pokemonUrl = '/api/pokemon';

  constructor(private http: HttpClient) { }

  getAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonUrl);
  }
  getPokemonById(id): Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.pokemonUrl}/${id}`);
  }
}
