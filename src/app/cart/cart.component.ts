import { Component, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
import { Payment } from '../payment/payment';
import { PaymentService } from "../payment/payment.service";
import { ActivatedRoute } from '@angular/router';


import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  quantity: number = 1;
  currentQuantity: number = 0;
  myValue:number=1;
  strs: string = "shivi"
  currentFoodOrder: any[] = [];
  shipping: number = 40
  tatalPrice: number = 0;
  handler: any = null;
  user: Payment = new Payment();
  cartDetails: any;

  constructor(private elRef: ElementRef, private paymentService: PaymentService, private router: Router, private route: ActivatedRoute) { }



  
  ngOnInit(): void {
    this.loadStripe();
    let dataresp = localStorage.getItem("totalPrice")
    this.currentFoodOrder = JSON.parse(localStorage.getItem('mycart') || '[]');
    this.tatalPrice = JSON.parse(dataresp || '0')+this.shipping;
    this.currentQuantity = JSON.parse(localStorage.getItem('totalQua') || '0');

    console.log(typeof (this.currentFoodOrder), this.currentFoodOrder, dataresp, this.tatalPrice, "dataresp");
    localStorage.setItem("cart",JSON.stringify(this.currentFoodOrder)) 

    this.cartDetails=JSON.parse(localStorage.getItem("cart")||'[]')
    this.checkOut()
    };




  down(items: any, min) {
    if (this.quantity <= parseInt(min)) {
      this.quantity = min
    }
    this.currentFoodOrder.map((item) => {
      if (item.dishId == items.dishId) {        
        item.quantity =items.quantity-1
      }
    })
    this.cartDetails=this.currentFoodOrder
    this.checkOut()

  }


  up(items: any) {
    this.quantity = this.quantity + 1
    this.currentFoodOrder.map((item) => {
      if (item.dishId == items.dishId) {
        item.quantity = parseInt(items.quantity)+1
        this.tatalPrice = this.tatalPrice - parseInt(items.price)
        this.tatalPrice = this.quantity * this.tatalPrice
      }
    })
    
    this.cartDetails=this.currentFoodOrder
    this.checkOut()
  }

  checkOut(){
    
    this.tatalPrice=0    
    for(let i=0;i<this.cartDetails.length;i++){

      this.tatalPrice=this.tatalPrice+this.cartDetails[i].price*this.cartDetails[i].quantity
    }
    this.tatalPrice=this.tatalPrice+40
  }

  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Ky9e6SDmI5mPYPPkXhH3BLyqrf2iYrHFFQInbiLV3PiT3AD9HpY7q0oLY6kTKF8l142D6Aql4stvoXRSnUuvo0m00yIMxwA67',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        paymentstripe(stripeToken);
      },
    });

    const paymentstripe = (stripeToken: any) => {
      this.paymentService.save(stripeToken).subscribe(
        (user: any) => {
          this.user = user;
          console.log(user, "userssss");

          if (user.code == 400) {
            console.log("error");
            this.paymentService.showToasterError();
            this.router.navigate(['/failed']);

          } else {
            console.log("success");
            this.paymentService.showSuccess();
            this.router.navigate(['/success']);

          }

        },
        (err: any) => {
          console.log("error");
        }
      );
    };

    paymentHandler.open({
      name: 'Order Food',
      // description: 'This is a sample pdf file',
      amount: amount * 100,
    });
  }

  loadStripe() {

    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token, "gggggggggggggg")
            alert('Payment Success!!');

          }
        });
      }

      window.document.body.appendChild(s);
    }
  }



}
