import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public authNg: AngularFireAuth,
    private http: HttpClient,
  ) { }

  /**
   * Fetches all users information
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}/api/users`);
  }

  /**
   * Fetches the logged in users information
   */
  async getUser(): Promise<User> {
    const user = await this.authNg.currentUser;
    if (user !== null) {
      return this.http.get<User>(`${apiUrl}/api/user/${user.uid}`).toPromise();
    }
  }

  /**
   * Adds a pokemon to the logged in user.
   */
  async addPokemonToUser(pokemon: any): Promise<any> {
    const user = await this.authNg.currentUser;
    if (user !== null) {
      return this.http.post<any>(`${apiUrl}/api/spot`, {user_id: user.uid, pokemon},
      {headers: { 'content-type': 'application/json'} })
      .toPromise();
    }
  }

}
