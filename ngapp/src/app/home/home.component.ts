import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import {AuthService} from '../_services/auth.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  users: {};
  currentUserInfo={}

  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.loading = true;
    this.currentUserInfo = this.authService.currentUserValue
      this.loading = false;
      this.users =  this.currentUserInfo['data'];
  
  

  }
  
}
