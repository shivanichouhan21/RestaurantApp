import { Payment } from './payment';
// import { UserFilter } from './User-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr'
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(public toaster: ToastrService,private http: HttpClient) { }


  save(entity: Payment): Observable<Payment> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
      url = `http://localhost:3200/create-payment-intent`;
      return this.http.post<Payment>(url, entity, {headers, params});
  }

  showSuccess (){
    // this.toaster.success('Hiiiii')
    this.toaster.success("Payment successfull !!")
  }

  showToasterError(){
    console.log("error");
    this.toaster.error("Something is wrong")
  };
}
