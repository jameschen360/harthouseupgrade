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
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      window.scrollTo(0, 0);
    });

    $(document).ready(function () {
      // $('#nav-icon').click(function () {
      //   $('#nav-icon').toggleClass('open');
      // });
      $(document).click(function (event) {
        if ($('#ham').attr('aria-expanded') === 'true') {
          console.log('open');
          $('#nav-icon').addClass('open');
        } else if ($('#ham').attr('aria-expanded') === 'false') {
          console.log('not open');
        } else {
          $('#nav-icon').removeClass('open');
        }
        $('.navbar-collapse').collapse('hide');
      });

    });
    // $(function () {
    //   $(document).click(function (event) {
    //     if ($('#ham').hasClass('collapsed')) {

    //     } else {
    //       $('#nav-icon').removeClass('open');
    //     }
    //     $('.navbar-collapse').collapse('hide');
    //   });
    // });
  }


}
