import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FrontFetchService } from '../../server/front-fetch.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-pdf',
  templateUrl: './menu-pdf.component.html',
  styleUrls: ['./menu-pdf.component.css']
})
export class MenuPdfComponent implements OnInit {
  postData: { menuType: string };
  responseData;
  url;

  constructor(private route: ActivatedRoute, public getData: FrontFetchService, public router: Router, private titleService: Title) {
    this.postData =  {
      menuType: this.route.snapshot.params['id']
    };
    this.route.params
      .subscribe(
        (params: Params) => {
          this.postData.menuType = params['id'];
          this.getMenuPdf();
        }
      );
      this.getMenuPdf();

      this.titleService.setTitle( 'Hart House Wine & Tapa | Menus' );
  }

  ngOnInit() {
  }

  getMenuPdf() {
    this.getData.postData(this.postData, 'menuPDF').then((result) => {
      this.responseData = result;
      if (this.responseData.msg === 'error') {
        this.router.navigate(['/error']);
      } else {
        this.url = this.responseData.url;
      }
    }, (err) => {
    });
  }
}
