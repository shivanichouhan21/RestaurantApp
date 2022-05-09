import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GalleryService } from './gallery.service';
import { Gallery } from './gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GALLERYComponent implements OnInit {

  title = "Gallery"
  get Gallery(): Gallery[] {
    return this.GalleryService.Gallery;
  }
  constructor(private GalleryService: GalleryService , private titleService: Title, private metaTageService: Meta) { }

  ngOnInit(): void {
    this.GalleryService.load();
    this.titleService.setTitle(this.title);
    this.metaTageService.updateTag({
      name: "description", content: "Add User template"
    })
  }
}
