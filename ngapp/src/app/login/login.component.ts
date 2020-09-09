import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../_services/auth.service'
import { first } from 'rxjs/operators';
import { User } from '../_models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;  

  error = '';
  Users: User[];
  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService :AuthService
    ) { }
    ngOnInit():void {
      this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = '/home';  
      this.authenticationService.logout();  

    }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.loading = true;
      this.authenticationService.login(this.f.email.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                localStorage.setItem('isLoggedIn', "true"); 
                localStorage.setItem('token', this.f.email.value);  
                this.router.navigate([this.returnUrl]);  

              },
              error => {
                console.warn(error);
                
                  this.error = error;
                  this.loading = false;
              });
  }
  }
