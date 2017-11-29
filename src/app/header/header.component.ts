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
<<<<<<< HEAD

      $(document).ready(function () {
        $('#nav-icon').removeClass('open');
      });
      
=======
      $(document).ready(function () {
        $('#nav-icon').removeClass('open');
      });
>>>>>>> 350a235e0997409003da15c4cb78153d927b6781
    });

    $(document).ready(function () {
      $(document).click(function (event) {
        $('.navbar-collapse').collapse('hide');
        if ($('#ham').attr('aria-expanded') === 'true') {
          $('#nav-icon').addClass('open');
        } else if ($('#ham').attr('aria-expanded') === 'false') {
<<<<<<< HEAD
          console.log('not open');
=======
          $('#nav-icon').removeClass('open');
          $('.navbar-collapse').collapse('hide');
        } else {
>>>>>>> 350a235e0997409003da15c4cb78153d927b6781
          $('#nav-icon').removeClass('open');
        } else {
          
        }
      });
    });
  }


}
