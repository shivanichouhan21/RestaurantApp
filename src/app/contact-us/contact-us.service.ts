import { Contact_us } from './contact-us';
// import { UserFilter } from './User-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr'
@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(public toaster: ToastrService,private http: HttpClient) { }


  
  save(entity: Contact_us): Observable<Contact_us> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
      url = `http://localhost:3200/contact/create`;
      return this.http.post<Contact_us>(url, entity, {headers, params});
  }

  showSuccess (){
    // this.toaster.success('Hiiiii')
    this.toaster.success("Detail save successfully !!")
  }

  showToasterError(){
    console.log("error");
    this.toaster.error("Something is wrong")
  };
}
