import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartPopupComponent } from './cart-popup/cart-popup.component';
import { CustomersService } from 'src/app/services/customers.service';

interface Medicine {
  name: string;
  price: string;
}

@Component({
  selector: 'app-pharmacy-page',
  templateUrl: './pharmacy-page.component.html',
  styleUrls: ['./pharmacy-page.component.scss']
})
export class PharmacyPageComponent implements OnInit{

  medicines: Medicine[] = [];

  constructor(public dialog: MatDialog, private _customers : CustomersService) { }
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
    this.getmedicines();
  }

  listmedicines: any;

  getmedicines() {
    this._customers.getmedicines().subscribe((response) => {
      this.listmedicines = response;
      console.log(this.listmedicines);
    });
  }

  // ngOnInit(): void {
  //   this.getordersbyID(6)
  // }
  // ordersinfo: any
  // getordersbyID(id:number) {
  //   this._customers.gettransactions(id).subscribe((response) => {
  //     this.ordersinfo = response;
  //     console.log(this.ordersinfo)
  //   })
  // }


}
