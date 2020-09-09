import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';
import {UserServiceService} from '../../_services/user-service.service'
import { UserData } from '../../_models/user-data';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, share } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userdata=[]
 loading = false;
 error = '';
 userList: Observable<any>;
 users: UserData[];

  constructor(private userservice:UserServiceService) { }

  ngOnInit(): void {
    this.userdata = [];
        this.getUserList();

  }
  getUserList() {
    this.loading = true;
    this.userservice.getuser().subscribe((data: any[])=>{
       this.loading = false;
          this.userdata = data['usersArray'];
        })  
  }
 // Delete employee
 deletedata(_id) {
this.userservice.deleteItem(_id).subscribe((data)=>{
    this.loading = false;
    this.getUserList();
  })  
}
}

