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
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  userdata=[]
  empForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  Users: UserData[];

  userList: Observable<any>;
  constructor(private userservice:UserServiceService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

ngOnInit(): void {
    this.userdata = [];
    this.getdeginationList();
this.empForm = this.formBuilder.group({
fristname: ['', Validators.required],
lastname: ['', Validators.required],
email: ['',[Validators.required,
       Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
password: ['', [Validators.required, Validators.minLength(6)]],
address: ['', Validators.required],
degination: ['', Validators.required],
stats: ['', Validators.required],
confirm_password: ['', [Validators.required]]
  },
  { 
    validator: ConfirmedValidator('password', 'confirm_password')
  });
  }
  get f() { return this.empForm.controls }

  getdeginationList() {
    this.loading = true;
    this.userservice.getDegination().subscribe((data: any[])=>{
        this.loading = false;
          this.userdata = data['designationArray'];
        })  

  }
  

  onSubmitemp(){
    
    
  
    this.submitted = true;
// stop here if form is invalid
    if (this.empForm.invalid) {
        return;
    } 
    this.loading = true;
    this.userservice.createemp(this.empForm.value).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/list']);
      },
      error => {
        console.warn(error);
        this.router.navigate(['/list']);
          this.error = error;
          this.loading = false;
      });
}
  onReset() {
    this.submitted = false;
    this.empForm.reset();
}
}
