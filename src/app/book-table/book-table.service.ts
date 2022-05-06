import { Table } from './table';
// import { UserFilter } from './User-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class BookTableService {

  constructor(public toaster: ToastrService,private http: HttpClient) { }


  save(entity: Table): Observable<Table> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
      url = `http://localhost:3200/table/create`;
      return this.http.post<Table>(url, entity, {headers, params});
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
