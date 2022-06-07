

import { ActivatedRoute } from '@angular/router';


import { Router } from '@angular/router';

import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { OrderNowService } from './order-now.service';
import { Order } from './order';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title Table with selection
 */
 @Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.css']
})
export class OrderNowComponent {
  quantity:number=0;
  price:number=0;
  list: any[] = [];
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  checked : boolean =  false;
  /** Whether the number of selected elements matches the total number of rows. */

  get Order(): Order[] {
    return this.OrderNowService.Order;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  constructor(    private router: Router,private route: ActivatedRoute,
   private OrderNowService: OrderNowService) { }

  ngOnInit(): void {
    this.OrderNowService.load();
  }

  add(arr, id) {
   console.log(arr,id,"DDDssss")
    arr.map((item,i)=>{
      if(item.dishId == id){
        arr.splice(i, 1);
        this.price=this.price-parseInt(item.price);
      }
    })
    return arr;
  }
  
  // console.log(add(arr, 'ted'))

  changeCheckbox(e,item){
    if (e.target.checked) {
      item.quantity = 1
      this.list.push(item)
      this.quantity=this.quantity+1
      this.price=this.price+parseInt(item.price)
      console.log(e,"DDDDD")
    }else{
      this.quantity=this.quantity-1
      console.log("unchecked")
      this.add(this.list,item.dishId)
    }
 
// this.checked = false
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  

 
  

get result() {
  return this.list.filter(item => item.checked);
}

addCart(){
  localStorage.setItem("mycart", JSON.stringify(this.list)); 
  localStorage.setItem("totalPrice", JSON.stringify(this.price)); 
  localStorage.setItem("totalQua", JSON.stringify(this.quantity)); 

  let dataresp = localStorage.getItem("totalPrice")
  let currentUser = JSON.parse(localStorage.getItem('mycart') || '[]');
  console.log(typeof(currentUser),currentUser,dataresp,"dataresp");  
  this.router.navigate(['/addToCart']);
}


}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */