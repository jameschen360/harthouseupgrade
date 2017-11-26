import { Component, OnInit } from '@angular/core';
import { FrontFetchService } from '../server/front-fetch.service';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

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

  constructor(public getData: FrontFetchService) {
    this.getGalleryImages();
    this.getBannerImages();
  }
  galleryImages = [{ small: '', medium: '', big: '', description: '' }];

  getGalleryImages() {
    this.getData.postData(this.postData, 'galleryImages').then((result) => {
      this.responseData = result;

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
