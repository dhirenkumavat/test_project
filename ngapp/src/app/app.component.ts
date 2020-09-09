import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './_services/auth.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;
  loading = false;
  users: {};
  currentUserInfo={}
  constructor(
    private router: Router,
    private authenticationService: AuthService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}
ngOnInit(): void {
  this.loading = true;
  this.currentUserInfo = this.authenticationService.currentUserValue
    this.loading = false;
    this.users =  this.currentUserInfo['data'];
    
   
    


    

}
logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
