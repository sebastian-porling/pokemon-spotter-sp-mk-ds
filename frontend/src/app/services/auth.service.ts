import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<firebase.User>;

  constructor(public authNg: AngularFireAuth) {
    this.user = authNg.authState;
  }
  public signUp(email, password): void {}

  public signIn(email, password): void{
    this.authNg.signInWithEmailAndPassword(email, password);
  }
  public signOut(): void{
    this.authNg.signOut();
  }
}
