import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public user: any;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService) { }

  get email(): any {
    return this.loginForm.get('email').value;
  }

  get password(): any {
    return this.loginForm.get('password').value;
  }

  ngOnInit(): void {
    this.checkUser();
  }

  public checkUser(): void {
    this.authService.user.subscribe((user) => this.user = user);
  }

  public signIn(): void {
    this.authService.signIn(this.email, this.password);
    this.checkUser();

  }

  public signUp(): void {

  }

  public signOut(): void {
    this.authService.signOut();
    this.checkUser();
  }
}
