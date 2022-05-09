import { MailService } from './mail';
// import { UserFilter } from './User-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  constructor(public toaster: ToastrService,private http: HttpClient) { }


  save(entity: MailService): Observable<MailService> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
      url = `http://localhost:3200/sendMailToUser/create`;
      return this.http.post<MailService>(url, entity, {headers, params});
  }

  showSuccess (){
    // this.toaster.success('Hiiiii')
    this.toaster.success("Data save successfully !!")
  }

  showToasterError(){
    console.log("error");
    this.toaster.error("Something is wrong")
  };
}
