import { Component, OnInit } from '@angular/core';
import { CoordinateService } from '../../coordinate.service';
import { MatDialog } from '@angular/material/dialog';
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

    // Convert latlng to a LatLng object
    const latLng = L.latLng(latlng);

    // Get the "coordinates" span element
    const coordinatesSpan = document.querySelector('.coordinates');

    if (coordinatesSpan) {
      // Update the content of the span with the latitude and longitude values
      coordinatesSpan.textContent = `${latLng.lat} ${latLng.lng}`;
    }
  }


constructor(private coordinateService: CoordinateService, private dialog: MatDialog) {}


onSubmitForm(): void {
  const coordinatesSpan = document.querySelector('.coordinates');
  if (coordinatesSpan) {
    const latLngString = coordinatesSpan.textContent;
    if (latLngString) {
      const [lat, lng] = latLngString.split(' ').map(Number);
      const coordinates: [number, number] = [lat, lng];
      this.coordinateService.setCoordinates(coordinates);
      console.log(coordinates)
      this.closeDialog();
    }
  }
}

closeDialog() {
  this.dialog.closeAll();
}

}
