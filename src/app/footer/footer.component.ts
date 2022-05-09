import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MailService } from './mail';
import {MailServiceService} from "./mail-service.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  user: MailService = new MailService();

  constructor(private userService: MailServiceService) { }

  ngOnInit(): void {
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
