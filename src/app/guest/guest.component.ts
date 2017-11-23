import { Component, OnInit } from '@angular/core';
import { FrontFetchService } from '../server/front-fetch.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  postData: { menuType: string };
  responseData;
  url;

  constructor(public getData: FrontFetchService) {
    this.getMenuPdf();
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

}
