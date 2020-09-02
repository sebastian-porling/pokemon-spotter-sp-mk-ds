import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn: boolean = false;

  constructor() { }

  public isLoggedIn(): Observable<boolean>{
    return of(this.loggedIn);
  }
  public signIn(): void{
    this.loggedIn = true;
  }
  public signOut(): void{
    this.loggedIn = false;
  }
}
