import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { USERS } from './../mock-data/mock-users';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public authNg: AngularFireAuth,
    private http: HttpClient,
  ) { }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }

  async getUser(): Promise<User> {
    const user = await this.authNg.currentUser;
    if (user !== null) {
      return this.http.get<User>(`http://localhost:3000/api/user/${user.uid}`).toPromise();
    }

  }
}
