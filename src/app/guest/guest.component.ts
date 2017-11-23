import { Component, OnInit } from '@angular/core';
import { FrontFetchService } from '../server/front-fetch.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  postData = {
    'user_id': 'public'
  };

  constructor() {

  }

  ngOnInit() {
  }


}
