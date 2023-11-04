import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { CoordinateService } from '../../coordinate.service';

// Use require to import the leaflet-routing-machine library
declare let L;


@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.scss']
})
export class ReservationDetailComponent implements OnInit {
  private map!: L.Map;
  private originIcon!: L.Icon;
  private destinationIcon!: L.Icon;

  constructor(private coordinateService: CoordinateService) {}

  ngOnInit(): void {
    this.initializeMap();
  }

  private initializeMap(): void {
    const coordinates = this.coordinateService.getCoordinates();

    if (coordinates) {
      const [lat, lng] = coordinates!;
      this.map = L.map('map1').setView([lat, lng], 16);
    } else {
      // Default coordinates if none are set
      const destinationlat = 13.758520624161234;
      const destinationlng = 121.05772592508096;
      this.map = L.map('map1').setView([destinationlat, destinationlng], 16);
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.originIcon = L.icon({
      iconUrl: './../../../../assets/pin.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    });

    this.destinationIcon = L.icon({
      iconUrl: './../../../../assets/Logo_NavBar.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    });

    if (coordinates) {
      const [lat, lng] = coordinates;
      const destinationlat = 13.758520624161234;
      const destinationlng = 121.05772592508096;

      const marker1 = L.marker([lat, lng], { icon: this.originIcon }).addTo(this.map);
      const marker2 = L.marker([destinationlat, destinationlng], { icon: this.destinationIcon }).addTo(this.map);

      L.Routing.control({
        waypoints: [
          L.latLng(lat, lng),
          L.latLng(destinationlat, destinationlng),
        ],
        routeWhileDragging: true,
      }).addTo(this.map);
    }
  }

}
