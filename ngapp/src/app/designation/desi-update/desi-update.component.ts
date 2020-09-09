import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../_services/user-service.service'
import { UserData } from '../../_models/user-data';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, share } from 'rxjs/operators'
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from 'rxjs/operators';
import { ConfirmedValidator } from '../../_models/confirmedvalidator';
@Component({
  selector: 'app-desi-update',
  templateUrl: './desi-update.component.html',
  styleUrls: ['./desi-update.component.css']
})
export class DesiUpdateComponent implements OnInit {
  userdata=[]
  empForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  Users: UserData[];
  constructor(private userservice:UserServiceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.userdata = [];
    this.empForm = this.formBuilder.group({
      deginationname: ['', Validators.required]
    });
  }


  getdegination(_id) {
    console.log(_id)
    this.userservice.getdeginationbyid(_id).subscribe(data => {
      this.empForm.setValue({
        deginationname: data['deginationname']
       
      });
    });
  }
  onupdatedesi(){
    
  }
}
