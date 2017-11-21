import { Component, OnInit, ElementRef } from '@angular/core';
import { FrontFetchService } from '../server/front-fetch.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  postData = {
    'user_id': 'public'
  };
  newsCountPostData = {
    'newsRowCount': ''
  };
  public responseData;
  public parrallaxUrl;
  public initialNews;
  public newsRowCount;
  public appendNews;
  public buttonLoading = false;

  noMoreNews = false;
  tempDisable = false;
  constructor(public getData: FrontFetchService, private elementRef: ElementRef) {
    this.getNews();
  }

  ngOnInit() {
  }

  getNews() {
    this.getData.postData(this.postData, 'newsPage').then((result) => {
      this.responseData = result;
      this.parrallaxUrl = this.responseData.imagePath;
      this.initialNews = this.responseData.initialNews;
      this.newsRowCount = this.responseData.rowCount;
    }, (err) => {
    });
  }

  loadMoreNews() {
    this.buttonLoading = true;
    this.tempDisable = true; // temp disable button
    this.newsCountPostData.newsRowCount = this.newsRowCount;
    this.getData.postData(this.newsCountPostData, 'loadMoreNews').then((result) => {
      this.responseData = result;
      this.newsRowCount = this.responseData.rowCount;
      this.appendNews = this.responseData.news;
      if (this.newsRowCount === 0) {
        this.noMoreNews = true;
      } else {
        const newsLength = this.appendNews.length;
        for (let i = 0; i < this.appendNews.length; i ++) {
          this.initialNews.push(this.appendNews[i]);
        }
        this.tempDisable = false; // temp disable button
      }
      this.buttonLoading = false;
    }, (err) => {
    });
  }
}
