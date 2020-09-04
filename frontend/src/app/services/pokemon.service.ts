import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  /**
   * Fetches all pokemon
   */
  getAllPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${apiUrl}/api/pokemon`);
  }

  /**
   * Fetches a pokemon by id
   */
  getPokemonById(id): Observable<Pokemon>{
    return this.http.get<Pokemon>(`${apiUrl}/api/pokemon/${id}`);
  }

}
