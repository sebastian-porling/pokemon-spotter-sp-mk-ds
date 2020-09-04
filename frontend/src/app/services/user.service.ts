import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public usersUrl = '/api/users';

  constructor(
    public authNg: AngularFireAuth,
    private http: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    console.log('UserService: ' + this.http.get<User[]>(this.usersUrl));
    return this.http.get<User[]>(this.usersUrl);
  }

  async getUser(): Promise<User> {
    const user = await this.authNg.currentUser;
    if (user !== null) {
      return this.http.get<User>(`/api/user/${user.uid}`).toPromise();
    }

  }
  async addPokemonToUser(pokemon: any): Promise<any> {
    const user = await this.authNg.currentUser;
    if (user !== null)
      return this.http.post<any>(`/api/spot`, {user_id:user.uid, pokemon}, {'headers': { 'content-type': 'application/json'} })
      .toPromise();
  }
}
