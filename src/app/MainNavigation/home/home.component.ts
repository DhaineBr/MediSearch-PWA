import { Component, OnInit } from '@angular/core';
import { MapComponent } from './map/map.component';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CustomersService } from 'src/app/services/customers.service';
import * as turf from '@turf/turf';
import { CoordinateService } from '../coordinate.service';

interface Pharmacy {
  name: string;
  address: string;
  storeHours: string;
  rating: number;
}

interface Sort {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pharmacies: Pharmacy[] = [];
  pharmacyList: Pharmacy[] = [];
  mapPopupOpened: boolean = false;


  constructor(public dialog: MatDialog, private _customers : CustomersService) { }

  ngOnInit(): void {

    this.getpharmacies();
      const shouldShowPopup = localStorage.getItem('mapPopupShown');
    // this.nearest();


    if (!shouldShowPopup) {
      this.openMapPopup();
    }
  }

  getpharmacies() {
    this._customers.getpharmacies().subscribe((response) => {
      this.pharmacyList = response;
      console.log(this.pharmacyList);
    });
  }

  // generateDummyData(count: number): Pharmacy[] {
  //   const dummyPharmacy: Pharmacy[] = [];

  //   for (let i = 1; i <= count; i++ ) {

  //     const rawRating = 4.03 + i / 20;
  //     const roundedRating = parseFloat(rawRating.toFixed(2));

  //     const pharmacy: Pharmacy = {
  //       pharmacyName: `Pharmacy ` + i,
  //       pharmacyAddress: `Brgy. ` + i,
  //       storeHours: `8:00 AM - 8:00 PM`,
  //       rating: roundedRating,
  //     };
  //     console.log(dummyPharmacy)
  //     dummyPharmacy.push(pharmacy);
  //   }
  //   return dummyPharmacy;
  // }


  resetMapPopupState() {
    localStorage.removeItem('mapPopupShown');
    this.openMapPopup();
  }

  //dropdown select menu
  selectedSorting: string = 'aToZ';

  sorting: Sort[] = [
    {value: 'aToZ', viewValue: 'Name: Ascending'},
    {value: 'zToA', viewValue: 'Name: Descending'},
    {value: 'rating', viewValue: 'Rating'},
    {value: 'distance', viewValue: 'Distance'},
  ];

  onSortingChange() {
    console.log('Selected sorting option:', this.selectedSorting);

    if (this.selectedSorting === 'aToZ') {
      this.optionAToZ();
    } else if (this.selectedSorting === 'zToA') {
      this.optionZToA();
    } else if (this.selectedSorting === 'rating') {
      this.optionRating();
    } else if (this.selectedSorting === 'distance') {
      this.optionDistance();
    }
  }


  optionAToZ()  {
    this.pharmacyList.sort((a, b) => a.name.localeCompare(b.name));
  }

  optionZToA()  {
    this.pharmacyList.sort((a, b) => b.name.localeCompare(a.name));
  }

  optionRating()  {
    this.pharmacyList.sort((a, b) => b.rating - a.rating);
  }

  optionDistance()  {

  }



  openMapPopup(): void {
    const dialogRef = this.dialog.open(MapComponent, {
      width: '45vh',
      height: '50vh',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      localStorage.setItem('mapPopupShown', 'true');
    });
}

  nearest(){
    const markers = [
      turf.point([13.758562308118623, 121.05806924780772]),
      turf.point([13.761292591154664, 121.05725385633166]),
      turf.point([13.756561469788396, 121.05907775831758]),
    ];

    const referencePoint = turf.point([13.758541466140864, 121.05892755462462]);

    let closestMarker = null;
    let closestDistance = Number.MAX_VALUE;

    markers.forEach(marker => {
      const distance = turf.distance(referencePoint, marker);

  if (distance < closestDistance) {
    closestMarker = marker;
    closestDistance = distance;
  }


  });

  if (closestMarker) {
    const nearestCoordinates = turf.getCoord(closestMarker);
    console.log('Nearest marker coordinates:', nearestCoordinates);

    const distanceInMeters = closestDistance * 1000;
    const roundedDistance = distanceInMeters.toFixed(2);
    console.log('Distance to nearest marker:', roundedDistance, 'meters');
  } else {
    console.log('No markers found.');
  }

}

}
