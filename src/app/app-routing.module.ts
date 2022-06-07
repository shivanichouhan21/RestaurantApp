import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from "../app/about-us/about-us.component"
import {BookTableComponent} from "../app/book-table/book-table.component"
import {ChefsComponent} from "../app/chefs/chefs.component"
import {ContactUsComponent} from "../app/contact-us/contact-us.component"
import {EventsComponent} from "../app/events/events.component"
import {GALLERYComponent} from "../app/gallery/gallery.component"
import {MenuComponent} from "../app/menu/menu.component"
import {SpecialsComponent} from "../app/specials/specials.component"
import {TESTIMONIALSComponent} from "../app/testimonials/testimonials.component"
import {HomeComponent} from "../app/home/home.component"
import {CartComponent} from '../app/cart/cart.component'

import {BackgroundComponent} from '../app/background/background.component'
import {FailurePageComponent} from '../app/failure-page/failure-page.component'

import {SuccessPageComponent} from '../app/success-page/success-page.component'

const routes: Routes = [
  
    { path: '', component: BackgroundComponent },
    { path: 'home', component: BackgroundComponent },
     { path: 'failed', component: FailurePageComponent },  
    { path: 'success', component:SuccessPageComponent },
    // { path: 'chef', component:ChefsComponent },
    // { path: 'contact-us', component:ContactUsComponent },
    // { path: 'events', component:EventsComponent },
    // { path: 'gallery', component:GALLERYComponent },
    // { path: 'menu', component:MenuComponent },
    // { path: 'Specials', component:SpecialsComponent },
    // { path: 'testimonial', component:TESTIMONIALSComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {path:'addToCart',component:CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
