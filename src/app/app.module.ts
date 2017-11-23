import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { EmbedVideo } from 'ngx-embed-video';
import { NgxGalleryModule } from 'ngx-gallery';
import { LoadingModule } from 'ngx-loading';

import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactComponent } from './contact/contact.component';
import { CweventComponent } from './cwevent/cwevent.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { MenuPdfComponent } from './menu/menu-pdf/menu-pdf.component';
import { MenuComponent } from './menu/menu.component';
import { GuestComponent } from './guest/guest.component';
import { NewsComponent } from './news/news.component';
import { ReservationComponent } from './reservation/reservation.component';
import { FrontFetchService } from './server/front-fetch.service';
import { VoucherComponent } from './voucher/voucher.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    HeaderComponent,
    MenuComponent,
    GuestComponent,
    GalleryComponent,
    NewsComponent,
    CalendarComponent,
    CweventComponent,
    ReservationComponent,
    VoucherComponent,
    ContactComponent,
    MenuPdfComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpguT_F2VwBtCXyAEumijhzAoJ4f7HHwQ'
    }),
    HttpModule,
    LoadingModule,
    EmbedVideo,
    PdfViewerModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    FrontFetchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
