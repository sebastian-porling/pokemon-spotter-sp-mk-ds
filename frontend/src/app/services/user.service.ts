import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public usersUrl = 'http://localhost:3000/api/users';

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
      return this.http.get<User>(`http://localhost:3000/api/user/${user.uid}`).toPromise();
    }

  }
}
