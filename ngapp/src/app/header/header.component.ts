import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loading = false;
  adminemail: {};
  currentUserInfo={}
  constructor(private router:Router,private authenticationService :AuthService) { }

  ngOnInit(): void {
    this.loading = true;
    this.currentUserInfo = this.authenticationService.currentUserValue
      this.loading = false;
      this.adminemail =  this.currentUserInfo['data']['email'];
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
