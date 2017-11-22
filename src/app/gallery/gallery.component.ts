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
  galleryImages: NgxGalleryImage[];
  postData = {
    'user_id': 'public'
  };
  public responseData;
  //public galleryImages;
  public galleryLoading = false;

  constructor(public getData: FrontFetchService) {
    this.getGalleryImages();
  }


  getGalleryImages() {
    this.getData.postData(this.postData, 'galleryImages').then((result) => {
      this.responseData = result;
      this.galleryImages[0].small = this.responseData.galleryImages;
      // this.galleryImages[0].medium = this.responseData.galleryImages;
      // this.galleryImages[0].big = this.responseData.galleryImages;
      console.log(this.responseData.galleryImages);
      console.log('hello');
      
      this.galleryLoading = false;
    }, (err) => {
      console.log('TOO BAD');
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



    //------ Format for gallery images------//
    //
    // this.galleryImages = [
    //   {
    //     small: 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg',
    //     medium: 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg',
    //     big: 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg'
    //   },
    //   {
    //     small: 'https://www.bmw.ca/content/dam/bmw/common/all-models/4-series/gran-coupe/2017/images-and-videos/images/BMW-4-series-gran-coupe-images-and-videos-1920x1200-04.jpg',
    //     medium: 'https://www.bmw.ca/content/dam/bmw/common/all-models/4-series/gran-coupe/2017/images-and-videos/images/BMW-4-series-gran-coupe-images-and-videos-1920x1200-04.jpg',
    //     big: 'https://www.bmw.ca/content/dam/bmw/common/all-models/4-series/gran-coupe/2017/images-and-videos/images/BMW-4-series-gran-coupe-images-and-videos-1920x1200-04.jpg'
    //   },
    //   {
    //     small: 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg',
    //     medium: 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg',
    //     big: 'https://www.elastic.co/assets/bltada7771f270d08f6/enhanced-buzz-1492-1379411828-15.jpg'
    //   }
    // ];



  }

}
