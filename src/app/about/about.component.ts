import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { FrontFetchService } from '../server/front-fetch.service';
import { Title } from '@angular/platform-browser';

declare var $el, $ps, $up, totalHeight, $, $p;

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
  public aboutUsTitle;
  public chefContent;
  public chefName;
  public chefPicture;
  public chefTitle;

  public chefIsDisabled = false;
  constructor(public getData: FrontFetchService, private _sanitizer: DomSanitizer, private titleService: Title) {
    this.getAboutUsContent();

    this.titleService.setTitle( 'Hart House Wine & Tapa | About Us' );

  }

  ngOnInit() {
  }

  readMore() {
    $(document).ready(function () {
      $('.sidebar-box').css('max-height', '8000px'); // set max height
      $('.read-more').fadeOut(700).hide();
    });
  }

  getAboutUsContent() {
    this.getData.postData(this.postData, 'aboutUsPage').then((result) => {
      this.responseData = result;
      this.parrallaxUrl = this.responseData.imagePath;
      this.aboutUsContent = this.transform(this.responseData.content);
      this.aboutUsTitle = this.transform(this.responseData.title);

      this.chefTitle = this.transform(this.responseData.chef_title);
      this.chefContent = this.transform(this.responseData.chef_content);
      this.chefName = this.transform(this.responseData.chef_name);
      this.chefPicture = this.responseData.chef_picture;

      this.chefIsDisabled = this.responseData.chefBioStatus;
    }, (err) => {
    });
  }

  transform(v: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(v);
  }
}
