import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

import { FrontFetchService } from '../server/front-fetch.service';

declare var $;

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent implements OnInit {
  postData = {
    'user_id': 'public'
  };
  public responseData;
  public parrallaxUrl;
  reservationForm: FormGroup;
  public buttonLoading = false;

  constructor(public getData: FrontFetchService, public snackBar: MatSnackBar) {
    this.getReserveContent();
    this.reservationForm = new FormGroup({
      'fullName': new FormControl(null, Validators.required),
      'phoneNumber': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]),
      'peopleNumber': new FormControl(null, [Validators.required]),
      'dateTime': new FormControl(null),
      'message': new FormControl(null)
    });
  }

  ngOnInit() {
    $(function () {
      $('#date-format').bootstrapMaterialDatePicker({ format: 'dddd DD MMMM YYYY - HH:mm', minDate: new Date(), shortTime: true });
    });
  }

  getReserveContent() {
    this.getData.postData(this.postData, 'reservation').then((result) => {
      this.responseData = result;
      this.parrallaxUrl = this.responseData.imagePath;
    }, (err) => {
    });
  }

  reserveButton() {
    this.buttonLoading = true;
    this.reservationForm.value.dateTime = $('#date-format').val();
    this.getData.postData(this.reservationForm.value, 'reservationSend').then((result) => {
      this.responseData = result;
      this.snackBar.open('Reservation was sent. Please check your email for confirmation!', 'Close', {
        duration: 10000
      });
      this.reservationForm.reset();
      this.buttonLoading = false;
    }, (err) => {
    });
  }
}
