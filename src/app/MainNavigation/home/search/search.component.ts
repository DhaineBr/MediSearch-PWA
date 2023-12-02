import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CartPopupComponent } from '../pharmacy-page/cart-popup/cart-popup.component';

interface Medicine {
  medicineName: string;
  storeName: string;
  storeAddress: string;
}


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})


export class SearchComponent {


  ngOnInit(): void {

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

  constructor(public dialog: MatDialog){}
  addToCart(): void {
    const dialogRef = this.dialog.open(CartPopupComponent, {
      width: '35vh',
      height: '31.5vh',
      data: { }
    });
  }
}
