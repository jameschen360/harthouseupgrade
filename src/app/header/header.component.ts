import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
    $(function () {
      $(document).click(function (event) {
        $('.navbar-collapse').collapse('hide');
      });
    });


  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      window.scrollTo(0, 0);
    });
  }


}
