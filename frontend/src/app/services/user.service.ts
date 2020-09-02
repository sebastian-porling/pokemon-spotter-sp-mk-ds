import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { User } from "../models/user";
import { USERS } from './../mock-data/mock-users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(USERS);
  }
}
