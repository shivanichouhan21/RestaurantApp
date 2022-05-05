import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  title = "Book A Table"

  constructor( private titleService: Title, private metaTageService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTageService.updateTag({
      name: "description", content: "Add User template"
    })
  }

}
