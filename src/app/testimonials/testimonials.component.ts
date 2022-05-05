import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TESTIMONIALSComponent implements OnInit {

  title = "Testimonial"

  constructor( private titleService: Title, private metaTageService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTageService.updateTag({
      name: "description", content: "Add User template"
    })
  }

}
