import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
