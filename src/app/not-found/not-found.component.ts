import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle( 'Hart House Wine & Tapa | Error 404' );
  }

  ngOnInit() {
  }

}
