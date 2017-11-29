import { Component, OnInit } from '@angular/core';
import { FrontFetchService } from '../server/front-fetch.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  postData: { menuType: string };
  responseData;
  url;
  public parrallaxUrl;

  constructor(public getData: FrontFetchService, private titleService: Title) {
    this.getMenuPdf();
    this.getBannerImages();

    this.titleService.setTitle( 'Hart House Wine & Tapa | Guest B&B' );
  }

  ngOnInit() {
  }

  getMenuPdf() {
    this.getData.postData(this.postData, 'guest').then((result) => {
      this.responseData = result;
      this.url = this.responseData.url;
    }, (err) => {
    });
  }

  getBannerImages() {
    this.getData.postData(this.postData, 'guestPage').then((result) => {
      this.responseData = result;
      this.parrallaxUrl = this.responseData.imagePath;
    }, (err) => {
    });
  }

}
