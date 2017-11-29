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

    // $(document).ready(function () {
    //   $('#nav-icon').click(function () {
    //     $('#nav-icon').toggleClass('open');
    //   });

    // });
    $(function () {
      $(document).click(function (event) {
        if ($('#nav-icon').data('clicked') && !$('#ham').hasClass('collapsed')) {
          $('#nav-icon').toggleClass('open');
        } else if ( event.target.class === 'container' && $('#ham').hasClass('collapsed')) {


        } else if (event.target.class !== 'container' && $('#ham').hasClass('collapsed')) {

        } else {

        }
        $('.navbar-collapse').collapse('hide');
      });
    });
  }


}
