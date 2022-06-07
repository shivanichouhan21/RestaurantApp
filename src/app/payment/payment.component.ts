import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Payment } from './payment';
import { PaymentService } from "./payment.service";
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  constructor(private paymentService: PaymentService) { }
  handler: any = null;
  user: Payment = new Payment();


  ngOnInit(): void {
    this.loadStripe();
  };

  
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
            console.log(user,"userssss");
            
            if (user.code == 400) {
              console.log("error");
              this.paymentService.showToasterError();
            } else {
              console.log("success");
              this.paymentService.showSuccess();
            }
      
          },
          (err: any) => {
            console.log("error");
          }
        );
    };

    paymentHandler.open({
      name: 'Coding Shiksha',
      description: 'This is a sample pdf file',
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





