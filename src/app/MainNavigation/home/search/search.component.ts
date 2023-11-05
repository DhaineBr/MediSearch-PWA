import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';


interface Pharmacy {
  pharmacyName: string;
  pharmacyAddress: string;
  storeHours: string;
  rating: number;
}

interface Sort {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent {

  pharmacies: Pharmacy[] = [];
  pharmacyList: Pharmacy[] = [];
  mapPopupOpened: boolean = false;

  ngOnInit(): void {
    this.pharmacies =this.generateDummyData(5);
    this.pharmacyList = this.generateDummyData(10);
  }

  generateDummyData(count: number): Pharmacy[] {
    const dummyPharmacy: Pharmacy[] = [];

    for (let i = 1; i <= count; i++ ) {

      const rawRating = 4.03 + i / 20;
      const roundedRating = parseFloat(rawRating.toFixed(2));

      const pharmacy: Pharmacy = {
        pharmacyName: `Pharmacy ` + i,
        pharmacyAddress: `Brgy. ` + i,
        storeHours: `8:00 AM - 8:00 PM`,
        rating: roundedRating,
      };
      console.log(dummyPharmacy)
      dummyPharmacy.push(pharmacy);
    }
    return dummyPharmacy;
  }

}
