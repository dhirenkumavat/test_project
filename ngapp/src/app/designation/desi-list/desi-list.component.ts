import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';
import {UserServiceService} from '../../_services/user-service.service'
import { UserData } from '../../_models/user-data';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, share } from 'rxjs/operators';

@Component({
  selector: 'app-desi-list',
  templateUrl: './desi-list.component.html',
  styleUrls: ['./desi-list.component.css']
})

export class DesiListComponent implements OnInit {
  loading = false;
  error = '';
  userdata=[]
  constructor(private userservice:UserServiceService) { }
  
  ngOnInit(): void {
    this.userdata = [];
    this.getdeginationList();
    
  }

  getdeginationList() {
    this.loading = true;
    this.userservice.getDegination().subscribe((data: any[])=>{
        this.loading = false;
          this.userdata = data['designationArray'];
        })  

  }
  // Delete Designation 
  deletedegination(_id) {
  this.userservice.deletedegination(_id).subscribe((data)=>{
      this.loading = false;
      this.getdeginationList();
    })  
  }

}
