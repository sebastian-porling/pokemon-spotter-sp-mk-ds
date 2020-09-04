import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<firebase.User>;

  constructor(
    public authNg: AngularFireAuth,
    private http: HttpClient,
    private router: Router
    ) {
    this.user = authNg.authState;
  }
  public signUp(user): void {
    console.log(user);
    this.http.post('/auth/register', user,
    {headers: { 'content-type': 'application/json'} }).subscribe(
      data => {
        this.signIn(user.email, user.password);
      },
      error => console.log('oops', error)
      );
  }

  public signIn(email, password): void{
    this.authNg.signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['userstartpage']);
    });

  }
  public signOut(): void{
    this.authNg.signOut();
    this.router.navigate(['']);
  }
}
