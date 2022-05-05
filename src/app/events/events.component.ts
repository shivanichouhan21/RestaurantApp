import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  title = "Events"

  constructor( private titleService: Title, private metaTageService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTageService.updateTag({
      name: "description", content: "Add User template"
    })
  }


}
