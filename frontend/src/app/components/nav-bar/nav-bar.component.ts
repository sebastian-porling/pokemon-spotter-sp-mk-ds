import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
declare var $: any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public user: any;
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private authService: AuthService) { }

  /**
   * Get email from form
   */
  get email(): any {
    return this.loginForm.get('email').value;
  }

  /**
   * Get password from form
   */
  get password(): any {
    return this.loginForm.get('password').value;
  }

  /**
   * Setup if user is logged in
   */
  ngOnInit(): void {
    this.checkUser();
  }

  /**
   * Check if user is logged in
   */
  public checkUser(): void {
    this.authService.user.subscribe((user) => this.user = user);
  }

  /**
   * Sign un user
   */
  public signIn(): void {
    this.authService.signIn(this.email, this.password);
    const modal = document.getElementById('modalSubscriptionForm');
    $('#modalSubscriptionForm').modal('hide');
    this.checkUser();
  }

  /**
   * Sign out the current logged in user
   */
  public signOut(): void {
    this.authService.signOut();
    this.checkUser();
  }

}
