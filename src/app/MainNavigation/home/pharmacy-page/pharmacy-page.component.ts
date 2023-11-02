import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartPopupComponent } from './cart-popup/cart-popup.component';

interface Medicine {
  medicineName: string;
  medicinePrice: string;
}

@Component({
  selector: 'app-pharmacy-page',
  templateUrl: './pharmacy-page.component.html',
  styleUrls: ['./pharmacy-page.component.scss']
})
export class PharmacyPageComponent implements OnInit{

  medicines: Medicine[] = [];

  constructor(public dialog: MatDialog) { }
  addToCart(): void {
    const dialogRef = this.dialog.open(CartPopupComponent, {
      width: '35vh',
      height: '31.5vh',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(){
    this.medicines = this.generateDummyData(20)
  }

  generateDummyData(count: number): Medicine[] {
    const dummyMedicine: Medicine[] = [];

    for (let i = 1; i <= count; i++ ) {

      const medicine: Medicine = {
        medicineName: `Medicine ` + i,
        medicinePrice: `Php` + (5 + (i * 1.25)),
      };
      console.log(dummyMedicine)
      dummyMedicine.push(medicine);
    }
    return dummyMedicine;
  }

}
