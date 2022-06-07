import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table'
import {OrderNowComponent} from "./order-now/order-now.component"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BackgroundComponent } from './background/background.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuComponent } from './menu/menu.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { SpecialsComponent } from './specials/specials.component';
import { EventsComponent } from './events/events.component';
import { ChefsComponent } from './chefs/chefs.component';
import { GALLERYComponent } from './gallery/gallery.component';
import { BookTableComponent } from './book-table/book-table.component';
import { TESTIMONIALSComponent } from './testimonials/testimonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PaymentComponent } from './payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule } from '@angular/material/table'  
import {CartComponent} from '../app/cart/cart.component'
import {FailurePageComponent} from '../app/failure-page/failure-page.component'
import {SuccessPageComponent} from '../app/success-page/success-page.component'

@NgModule({
  declarations: [
    AppComponent,CartComponent,SuccessPageComponent,
    SidebarComponent,
    BackgroundComponent,
    HomeComponent,
    AboutUsComponent,
    MenuComponent,FailurePageComponent,
    WhyUsComponent,
    SpecialsComponent,
    EventsComponent,
    ChefsComponent,
    GALLERYComponent,
    BookTableComponent,
    TESTIMONIALSComponent,PaymentComponent,OrderNowComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent  ],
  imports: [HttpModule,HttpClientModule,ReactiveFormsModule,FormsModule,ToastrModule.forRoot(),BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,MatTableModule
    // MDBBootstrapModule.forRoot()
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
