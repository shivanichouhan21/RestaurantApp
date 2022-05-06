import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Contact_us } from './contact-us';
import {ContactUsService} from "./contact-us.service";
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  title = "Contact-Us"
  user: Contact_us = new Contact_us();

  constructor(private ContactUsService: ContactUsService, private titleService: Title, private metaTageService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.metaTageService.updateTag({
      name: "description", content: "Add User template"
    })
  }
  save() {
    this.ContactUsService.save(this.user).subscribe(
      user => {
        this.user = user;
        if(user.code == 400){
          console.log("error",this.user);
          this.ContactUsService.showToasterError();
        }else{
          console.log("success",this.user);
          this.ContactUsService.showSuccess();
        }
       
      },
      err => {
        console.log("error");
              }
    );
  }
}
