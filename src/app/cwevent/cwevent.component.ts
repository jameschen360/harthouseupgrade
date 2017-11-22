import { Component, OnInit } from '@angular/core';
import { FrontFetchService } from '../server/front-fetch.service';

@Component({
  selector: 'app-cwevent',
  templateUrl: './cwevent.component.html',
  styleUrls: ['./cwevent.component.css']
})

export class CweventComponent implements OnInit {
  postData = {
    'user_id': 'public'
  };
  public responseData;
  public parrallaxUrl;
  public cwEventContent;
  public contentImage;
  constructor(public getData: FrontFetchService) {
    this.getCWEventContent();
  }

  ngOnInit() {
  }

  getCWEventContent() {
    this.getData.postData(this.postData, 'cwevent').then((result) => {
      this.responseData = result;
      this.parrallaxUrl = this.responseData.imagePath;
      this.cwEventContent = this.responseData.content;
      // this.contentImage = this.responseData.contentImage;  // NOT IN USE

    }, (err) => {
    });
  }
}

