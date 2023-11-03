import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map: any;
  private currentMarker: L.Marker | null = null;

  ngOnInit(): void {
    if (!this.map) {
      this.map = L.map('map');

      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 15,
        minZoom: 10,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });
      tiles.addTo(this.map);

      this.map.on('click', (e: L.LeafletMouseEvent) => {
        this.updateLocation(e.latlng);
      });


      this.map.locate({ setView: true, maxZoom: 15 });

      this.map.on('locationfound', (e: L.LocationEvent) => {
        this.updateLocation(e.latlng);
      });

      this.map.on('locationerror', (e: L.ErrorEvent) => {
        console.log(e.message);
      });
    }
  }

  updateLocation(latlng: L.LatLngExpression): void {
    if (this.currentMarker) {
      this.map.removeLayer(this.currentMarker);
    }

    const customIcon = L.icon({
      iconUrl: './../../../assets/pin.png',
      iconSize: [45, 45],
      iconAnchor: [16, 16]
    });

    this.currentMarker = L.marker(latlng, { icon: customIcon }).addTo(this.map);
  }



  //form that save the user input
  constructor(private coordinateService: CoordinateService) {}

  onSubmitForm(): void {
    // Process form data and obtain the coordinates
    const coordinates: [number, number] = [latitude, longitude];

    // Save the coordinates using the service
    this.coordinateService.setCoordinates(coordinates);
  }
}
