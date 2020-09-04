import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { User } from "../models/user";
import { USERS } from './../mock-data/mock-users';
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.userUrl);

    //return of(USERS);
  }
}


// public httpOptions = {
//   headers: new HttpHeaders({'Content-Type': 'application/json'})
// };


