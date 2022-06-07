import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Router } from '@angular/router';
@Component({
  selector: 'app-failure-page',
  templateUrl: './failure-page.component.html',
  styleUrls: ['./failure-page.component.css']
})
export class FailurePageComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
