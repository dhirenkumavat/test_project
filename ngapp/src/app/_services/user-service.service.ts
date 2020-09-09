import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map,catchError,retry } from 'rxjs/operators';
import { UserData } from '../_models/user-data';
import {Designation} from '../_models/designation';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  apiUrl ="http://localhost:8080/api/"

  constructor(private http:HttpClient) { }

 getuser(): Observable<any[]>{
  return this.http.get<any>(this.apiUrl + "getuser");
 }
 getDegination(): Observable<any[]>{
    return this.http.get<any>(this.apiUrl + "getdesignation");
   }
// Get single user data by ID
getItembyid(id): Observable<any[]> {
  return this.http
    .get<any>(this.apiUrl + 'getuserbyid/' + id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
}

  createemp(users) {
    return this.http.post<any>(this.apiUrl + 'Add_user', users)
    .pipe(
      catchError(this.handleError)
    );
  }

  createdegination(Designation) {
    return this.http.post<any>(this.apiUrl + 'Add_designation', Designation)
    .pipe(
      catchError(this.handleError)
    );
  }

  // HttpClient API delete() method => Delete employee
deleteItem(_id){
  console.log(_id);
    return this.http.delete(this.apiUrl + 'Deleteuser/'+ _id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 // HttpClient API delete() method => Delete employee
 deletedegination(_id){
  console.log(_id);
    return this.http.delete(this.apiUrl + 'Deletedesignation/'+ _id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

 // Get employee
 getdeginationbyid(_id): Observable<any> {
 return this.http
      .get<any>(this.apiUrl + 'deginationbyid/' + _id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  


}




  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    return throwError('Something bad happened. Please try again later.');
  }

}