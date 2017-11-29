import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle( 'Hart House Wine & Tapa | Event Calendar' );
  }

  ngOnInit() {
  }

}
