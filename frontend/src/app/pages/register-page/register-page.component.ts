import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public registerForm: FormGroup;
  public gitlab: any;

  constructor(
    private cookieService: CookieService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.gitlab = JSON.parse(this.cookieService.get('gitlab'));
    this.registerForm = new FormGroup({
      email: new FormControl(this.gitlab.email, Validators.required),
      password: new FormControl('', Validators.required),
      re_password: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    const formvalues = this.registerForm.value;
    if (formvalues.password === formvalues.re_password) {
      this.authService.signUp({
        email: formvalues.email,
        password: formvalues.password,
        displayName: this.gitlab.username,
        photoURL: this.gitlab.avatar_url
      });
    }
  }
}
