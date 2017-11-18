import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGalleryModule } from 'ngx-gallery';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CweventComponent } from './cwevent/cwevent.component';
import { ReservationComponent } from './reservation/reservation.component';
import { VoucherComponent } from './voucher/voucher.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    HeaderComponent,
    MenuComponent,
    GalleryComponent,
    NewsComponent,
    CalendarComponent,
    CweventComponent,
    ReservationComponent,
    VoucherComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
