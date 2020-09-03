import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public registerForm: FormGroup;
  public gitlab: any;
  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
    this.gitlab = JSON.parse(this.cookieService.get('gitlab'));
    console.log(this.gitlab.email);
    this.registerForm = new FormGroup({
      email: new FormControl(this.gitlab.email),
      password: new FormControl(''),
      re_password: new FormControl('')
    });
  }

  onSubmit(): void {

  }
}
