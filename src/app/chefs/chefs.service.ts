import { Chef } from './chef';
// import { UserFilter } from './User-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChefsService {

  Chef: Chef[] = [];
  constructor(private http: HttpClient) { }


  
  load(): void {
    this.find().subscribe(result => {
      console.log(result,"jjjjjjjj");
        let data =  result
        this.Chef =data
        console.log( this.Chef ," this.Chef  this.Chef ")
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(): Observable<Chef[]> {
    const url = `http://localhost:3200/chef/chefsList`;
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Chef[]>(url, {headers});
  }
}
