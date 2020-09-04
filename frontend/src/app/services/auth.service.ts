import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;

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

  /**
   * Register new user, sign in user if new user created
   * @param user user object
   */
  public signUp(user): void {
    console.log(user);
    this.http.post(`${apiUrl}/auth/register`, user,
    {headers: { 'content-type': 'application/json'} }).subscribe(
      data => {
        this.signIn(user.email, user.password);
      },
      error => console.log('oops', error)
      );
  }

  /**
   * Sign in user with credentials and redirect to user start page
   * @param email user email
   * @param password user password
   */
  public signIn(email, password): void{
    this.authNg.signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['userstartpage']);
    });

  }

  /**
   * Sign out user and navigate to home
   */
  public signOut(): void{
    this.authNg.signOut();
    this.router.navigate(['']);
  }

}
