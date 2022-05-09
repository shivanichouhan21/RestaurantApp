import { Gallery } from './gallery';
// import { UserFilter } from './User-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  Gallery: Gallery[] = [];
  constructor(private http: HttpClient) { }


  
  load(): void {
    this.find().subscribe(result => {
      console.log(result,"jjjjjjjj");
        let data =  result
        this.Gallery =data
        console.log( this.Gallery ," this.Gallery  this.Gallery ")
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(): Observable<Gallery[]> {
    const url = `http://localhost:3200/gallery/galleryList`;
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Gallery[]>(url, {headers});
  }
}
