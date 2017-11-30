import { Component, OnInit } from '@angular/core';
import { FrontFetchService } from '../server/front-fetch.service';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  postData = {
    'user_id': 'public'
  };
  public responseData;
  public galleryLoading = false;
  public parrallaxUrl;
  public buttonLoading = true;

  constructor(public getData: FrontFetchService, private titleService: Title) {
    this.getGalleryImages();
    this.getBannerImages();

    this.titleService.setTitle( 'Hart House Wine & Tapa | Gallery' );
  }
  galleryImages = [{ small: '', medium: '', big: '', description: '' }];

  getGalleryImages() {
    this.getData.postData(this.postData, 'galleryImages').then((result) => {
      this.responseData = result;
      console.log(this.responseData.galleryImages);
      for (let i = 0; i < this.responseData.galleryImages.length; i++) {
        this.galleryImages.push({
          small: this.responseData.galleryImages[i].url,
          medium: this.responseData.galleryImages[i].url,
          big: this.responseData.galleryImages[i].url,
          description: ''
        });

      }
      this.galleryImages = this.galleryImages.splice(1);

      this.galleryLoading = false;
      this.buttonLoading = false;
    }, (err) => {
      console.log('TOO BAD');
    });
  }

  getBannerImages() {
    this.getData.postData(this.postData, 'galleryPage').then((result) => {
      this.responseData = result;
      this.parrallaxUrl = this.responseData.imagePath;
    }, (err) => {
    });
  }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '93%',
        height: '650px',
        thumbnailsColumns: 4,
        imageSwipe: true,
        thumbnailsArrows: true,
        thumbnailsSwipe: true,
        previewSwipe: true,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '800px',
        imagePercent: 80,
        thumbnailsPercent: 40,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

  }

}
