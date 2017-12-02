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

      $(document).ready(function () {
        $('#nav-icon').removeClass('open');
      });
    });

    $(document).ready(function () {
      // desktop fix
      $(document).click(function (event) {
        $('.navbar-collapse').collapse('hide');
        if ($('#ham').attr('aria-expanded') === 'true') {
          $('#nav-icon').addClass('open');
        } else if ($('#ham').attr('aria-expanded') === 'false') {
          $('#nav-icon').removeClass('open');
        } else {
        }
      });

      // For mobile fix
      $(document).on('touchstart', function (e) {
        $('.navbar-collapse').collapse('hide');
        if ($('#ham').attr('aria-expanded') === 'true') {
          $('#nav-icon').addClass('open');
        } else if ($('#ham').attr('aria-expanded') === 'false') {
          $('#nav-icon').removeClass('open');
        } else {
        }
      });
    });
  }


}
