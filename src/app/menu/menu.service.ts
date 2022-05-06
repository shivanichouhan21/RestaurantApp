import { Menu } from './menu';
// import { UserFilter } from './User-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuList: Menu[] = [];
  constructor(private http: HttpClient) { }



  load(): void {
    this.find().subscribe(result => {
      console.log(result,"jjjjjjjj");
        let data =  result
        this.menuList =data
        console.log( this.menuList ," this.flightList  this.flightList ")
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(): Observable<Menu[]> {
    const url = `http://localhost:3200/dish/list_menu`;
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Menu[]>(url, {headers});
  }

}
