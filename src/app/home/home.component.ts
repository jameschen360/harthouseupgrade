import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { FrontFetchService } from '../server/front-fetch.service';
import { DomSanitizer } from '@angular/platform-browser';
import { EmbedVideoService } from 'ngx-embed-video';
import { Title } from '@angular/platform-browser';

declare var $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public bannerLoading = false;

  postData = {
    'user_id': 'public'
  };
  public responseData;
  public bannerImages;
  public homeVideo;
  public contentText;
  public videoUrl = null;
  public title;
  public iframe_html;
  public videoContentBlock = true; // initialize video content block as false

  constructor(public getData: FrontFetchService, private sanitizer: DomSanitizer,
    private embedService: EmbedVideoService, private titleService: Title) {
    this.bannerLoading = true;
    this.getBannerImages();
    this.getHomeVideoContent();

    this.titleService.setTitle( 'Hart House Wine & Tapa | Home - Camrose Alberta' );
  }

  ngOnInit() {
  }

  getBannerImages() {
    this.getData.postData(this.postData, 'bannerImages').then((result) => {
      this.responseData = result;
      this.bannerImages = this.responseData.bannerImages;
      $(function () {
        $('.slider').bxSlider();
      });
      this.bannerLoading = false;
    }, (err) => {
    });
  }

  getHomeVideoContent() {
    this.getData.postData(this.postData, 'homeVideo').then((result) => {
      this.responseData = result;
      this.homeVideo = this.responseData.homeVideo[0];
      // this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.homeVideo.video_url);

      this.iframe_html = this.embedService.embed(this.homeVideo.video_url,
        { query: { portrait: 0, color: '333' }, attr: { width: 640 , height: 360 } });

      this.contentText = this.homeVideo.content_text;
      this.title = this.homeVideo.title;

    }, (err) => {
    });
  }

}
