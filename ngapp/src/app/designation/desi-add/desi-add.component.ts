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
  selector: 'app-desi-add',
  templateUrl: './desi-add.component.html',
  styleUrls: ['./desi-add.component.css']
})
export class DesiAddComponent implements OnInit {
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
get f() { return this.empForm.controls }

onSubmitemp(){
  this.submitted = true;
 // stop here if form is invalid
  if (this.empForm.invalid) {
      return;
  } 
  this.loading = true;
  this.userservice.createdegination(this.empForm.value).subscribe(
    data => {
      console.log(data);
      this.router.navigate(['/deginationlist']);
    },
    error => {
      console.warn(error);
      this.router.navigate(['/deginationlist']);
        this.error = error;
        this.loading = false;
    });


}
onReset() {
  this.submitted = false;
  this.empForm.reset();
}
}
