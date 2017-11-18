import { Component, OnInit } from '@angular/core';
import { FrontFetchService } from '../server/front-fetch.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  postData = {
    'user_id': 'public'
  };
  public responseData;
  public hoursOfOperation;
  constructor(public getData: FrontFetchService) {
    this.getHoursOfOperation();
  }

  ngOnInit() {
  }

  getHoursOfOperation() {
    this.getData.postData(this.postData, 'hoursOfOperation').then((result) => {
      this.responseData = result;
      this.hoursOfOperation = this.responseData.hoursOfOperation[0].content;
    }, (err) => {
    });
  }
}
