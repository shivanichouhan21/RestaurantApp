import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { EventsService } from './events.service';
import { Event } from './events';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  title = "Events"

  get Events(): Event[] {
    return this.EventService.Events;
  }
  constructor(private EventService: EventsService, private titleService: Title, private metaTageService: Meta) { }

  ngOnInit(): void {
    this.search()
    this.titleService.setTitle(this.title);
    this.metaTageService.updateTag({
      name: "description", content: "Add User template"
    })
  }
  search(): void {
    this.EventService.load();
  }

}
