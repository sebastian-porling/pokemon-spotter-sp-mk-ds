import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public isLoggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.checkLogin();
  }
  public checkLogin() : void {
    this.authService.isLoggedIn()
      .subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn)
  }
  public signIn(){
    this.authService.signIn();
    this.checkLogin();
  }
  public signOut(){
    this.authService.signOut();
    this.checkLogin();
  }
}
