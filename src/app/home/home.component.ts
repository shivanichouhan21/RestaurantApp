import { Component, OnInit } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta:Meta,private title:Title) {

    this.meta.addTags([
      {
        name:"description",content:"Hpme page is SEO friendly"
      },
      {
        name:"author",content:"buttercms"
      },
      {
        name:"keywords",content:"angular butterCMS"
      }
    ])
    this.setTitle("Home page")
   }
   public setTitle(newTitle:string){
     this.title.setTitle(newTitle)
   }
  ngOnInit(): void {
  }

}
