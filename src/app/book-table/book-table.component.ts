import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Table } from './table';
import {BookTableService} from "./book-table.service";

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  title = "Book A Table"
  user: Table = new Table();

  constructor(
    private userService: BookTableService, private titleService: Title, private metaTageService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTageService.updateTag({
      name: "description", content: "Add User template"
    })
  }

 
 

   


  save() {
    this.userService.save(this.user).subscribe(
      user => {
        this.user = user;
        if(user.code ==400){
          console.log("error",this.user);
          this.userService.showToasterError();
        }else{
          console.log("success",this.user);
          this.userService.showSuccess();
        }
       
      },
      err => {
        console.log("error");
              }
    );
  }

}
