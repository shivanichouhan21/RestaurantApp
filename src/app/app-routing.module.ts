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




const routes: Routes = [
  
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
     { path: 'about-us', component: AboutUsComponent },  
    { path: 'book-table', component:BookTableComponent },
    { path: 'chef', component:ChefsComponent },
    { path: 'contact-us', component:ContactUsComponent },
    { path: 'events', component:EventsComponent },
    { path: 'gallery', component:GALLERYComponent },
    { path: 'menu', component:MenuComponent },
    { path: 'Specials', component:SpecialsComponent },
    { path: 'testimonial', component:TESTIMONIALSComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
