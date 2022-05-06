import { Event } from './events';
// import { UserFilter } from './User-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  Events: Event[] = [];
  constructor(private http: HttpClient) { }



  load(): void {
    this.find().subscribe(result => {
      console.log(result,"jjjjjjjj");
        let data =  result
        this.Events =data
        console.log( this.Events ," this.flightList  this.flightList ")
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(): Observable<Event[]> {
    const url = `http://localhost:3200/events/eventsList`;
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Event[]>(url, {headers});
  }}
