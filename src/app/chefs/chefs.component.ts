import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ChefsService } from './chefs.service';
import { Chef } from './chef';
@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {

  title = "Chef"
  get Chef(): Chef[] {
    return this.ChefsService.Chef;
  }
  constructor(private ChefsService:ChefsService, private titleService: Title, private metaTageService: Meta) { }

  ngOnInit(): void {
    this.ChefsService.load();
    this.titleService.setTitle(this.title);
    this.metaTageService.updateTag({
      name: "description", content: "Add User template"
    })
  }
}
