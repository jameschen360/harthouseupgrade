import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FrontFetchService } from '../server/front-fetch.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  postData = {
    'user_id': 'public'
  };
  public responseData;
  public parrallaxUrl;
  public aboutUsContent;
  constructor(public getData: FrontFetchService, private _sanitizer: DomSanitizer) {
    this.getAboutUsContent();
  }

  ngOnInit() {
  }

  getAboutUsContent() {
    this.getData.postData(this.postData, 'aboutUsPage').then((result) => {
      this.responseData = result;
      this.parrallaxUrl = this.responseData.imagePath;
      this.aboutUsContent = this.transform(this.responseData.content);
    }, (err) => {
    });
  }

  transform(v: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }
}
