import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

declare var $;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  // @ViewChild('isOpen') isOpen: ElementRef;

  constructor() {
    $(function() {
      $(document).click(function (event) {
        $('.navbar-collapse').collapse('hide');
      });
    });
  }

  ngOnInit() {
  }


}
