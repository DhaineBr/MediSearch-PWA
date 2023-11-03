import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoordinateService {
  private savedCoordinates: [number, number] | null = null;

  setCoordinates(coordinates: [number, number]): void {
    this.savedCoordinates = coordinates;
  }

  getCoordinates(): [number, number] | null {
    return this.savedCoordinates;
  }
}
