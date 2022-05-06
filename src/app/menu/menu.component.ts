import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
// import { UserFilter } from '../user-filter';
import { MenuService } from './menu.service';
import { Menu } from './menu';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title = "Menu"
  get menuList(): Menu[] {
    return this.MenuService.menuList;
  }
  constructor(private MenuService: MenuService, private titleService: Title, private metaTageService: Meta) { }

  ngOnInit(): void {
    this.search();
    this.titleService.setTitle(this.title);
    this.metaTageService.updateTag({
      name: "description", content: "Add User template"
    })
  }

  search(): void {
    this.MenuService.load();
  }

}
