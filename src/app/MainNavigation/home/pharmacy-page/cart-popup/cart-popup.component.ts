import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.scss']
})
export class CartPopupComponent {
  constructor(public dialogRef: MatDialogRef<CartPopupComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
