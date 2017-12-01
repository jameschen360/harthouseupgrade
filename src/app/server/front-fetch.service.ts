import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class FrontFetchService {
<<<<<<< HEAD
  URL = 'https://harthousewineandtapa.com/ngtest/general/';
=======
  // PRODUCTION OR SANDBOX DEV
  setAs: String = 'production'; // production or sandbox
  URL: String;
>>>>>>> 5a8415b5756c3f4df4d2f9e501a130719bc0102e

  constructor(public http: Http, public router: Router) {
    if (this.setAs === 'production') {
      this.URL = 'https://harthousewineandtapa.com/angularServices/general/';
    } else  if (this.setAs === 'sandbox') {
      this.URL = 'https://harthousewineandtapa.com/ngtest/general/';
    }
  }
  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      const headers = new Headers();
      this.http.post(this.URL + type, JSON.stringify(credentials), { headers: headers })
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

}
