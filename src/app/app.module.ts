import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { TopbarComponent } from './topbar/topbar.component';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BackgroundComponent,
    HomeComponent,
    AboutUsComponent,
    MenuComponent,
    WhyUsComponent,
    SpecialsComponent,
    EventsComponent,
    ChefsComponent,
    GALLERYComponent,
    BookTableComponent,
    TESTIMONIALSComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
