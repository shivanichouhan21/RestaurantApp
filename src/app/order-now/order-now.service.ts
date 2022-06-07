import { Order } from './order';
// import { UserFilter } from './User-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderNowService {

  Order: Order[] = [];
  constructor(private http: HttpClient) { }


  
  load(): void {
    this.find().subscribe(result => {
      console.log(result,"jjjjjjjj");
        let data =  result
        this.Order =data
        // console.log( this.Order ," this.Chef  this.Chef ")
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(): Observable<Order[]> {
    const url = `http://localhost:3200/dish/list_menu`;
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Order[]>(url, {headers});
  }
}
