import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { FrontFetchService } from '../server/front-fetch.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public parrallaxUrl;
  postData = {
    'user_id': 'public'
  };
  messageContent = {
    'fullName': '',
    'email': '',
    'reason': '',
    'message': ''
  };
  public responseData;
  public contactUsForm: FormGroup;
  public maxMessageLength = 50; // max message length
  public currentMessageLength;
  public buttonLoading = false;
  public formSubmitted = false;

  public addressHTML;
  public emailHTML;
  public phoneHTML;

  lat = 53.01889;
  lng = -112.8245;
  zoom = 15;
  styles = [
    {
      "featureType": "all",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "saturation": "11"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#444444"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "lightness": "-30"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "elementType": "geometry",
      "stylers": [
        {
          "saturation": "-43"
        },
        {
          "lightness": "-19"
        },
        {
          "gamma": "1.87"
        }
      ]
    },
    {
      "featureType": "administrative.neighborhood",
      "elementType": "labels.text",
      "stylers": [
        {
          "weight": "3.96"
        },
        {
          "gamma": "1.88"
        },
        {
          "lightness": "-12"
        },
        {
          "saturation": "-100"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
        {
          "color": "#f2f2f2"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "lightness": 45
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "color": "#aaaaaa"
        },
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "saturation": "9"
        },
        {
          "color": "#bbad97"
        }
      ]
    }
  ];
  constructor(public getData: FrontFetchService, public snackBar: MatSnackBar) {
    this.getContactContent();
    this.contactUsForm = new FormGroup({
      'contactName': new FormControl(null, [Validators.required]),
      'contactEmail': new FormControl(null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      'contactMessage': new FormControl(null, [Validators.required, Validators.minLength(this.maxMessageLength)]),
      'reason': new FormControl('General Inquiries')
    });
  }

  ngOnInit() {
    this.onChanges();
  }

  onChanges(): void {
    this.contactUsForm.get('contactMessage').valueChanges.subscribe(val => {
      try {
        this.currentMessageLength = val.length;
      } catch (err) {
        this.currentMessageLength = 0;
      }
    });
  }

  getContactContent() {
    this.getData.postData(this.postData, 'contactUsPage').then((result) => {
      this.responseData = result;
      this.parrallaxUrl = this.responseData.imagePath;
      this.addressHTML = this.responseData.content[0].content;
      this.emailHTML = this.responseData.content[1].content;
      this.phoneHTML = this.responseData.content[2].content;
    }, (err) => {
    });
  }

  sendMessage() {
    this.buttonLoading = true;
    this.messageContent.fullName = this.contactUsForm.value.contactName;
    this.messageContent.email = this.contactUsForm.value.contactEmail;
    this.messageContent.reason = this.contactUsForm.value.reason;
    this.messageContent.message = this.contactUsForm.value.contactMessage;

    this.getData.postData(this.messageContent, 'contactUsMessageSend').then((result) => {
      this.responseData = result;
      this.buttonLoading = false;
      this.formSubmitted = true;
      this.snackBar.open('Thank you for your message. We will reply to you shortly!', 'Close', {
        duration: 10000
      });
    }, (err) => {
    });
  }

}
