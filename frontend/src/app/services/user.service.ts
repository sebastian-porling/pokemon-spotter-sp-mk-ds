import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { User } from "../models/user";
import { USERS } from './../mock-data/mock-users';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public usersUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    console.log("UserService: " + this.http.get<User[]>(this.usersUrl));
    
    return this.http.get<User[]>(this.usersUrl);
  }
}
