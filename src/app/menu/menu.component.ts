import { Component, OnInit } from '@angular/core';
import { FrontFetchService } from '../server/front-fetch.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  postData = {
    'user_id': 'public'
  };
  public responseData;
  public menus;
  public parrallaxUrl;
  public menuLunch;
  public menuDinner;
  public menuDrinks;
  constructor(public getData: FrontFetchService, private sanitizer: DomSanitizer) {
    this.getBannerImages();
  }

  ngOnInit() {
  }

  getBannerImages() {
    this.getData.postData(this.postData, 'menuPage').then((result) => {
      this.responseData = result;
      this.parrallaxUrl = this.responseData.imagePath;
    }, (err) => {
    });
  }

}
