import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  @Output() ratingSelected = new EventEmitter<number>();
  rating: number = 0;

  constructor(
    private dialogRef: MatDialogRef<ConfirmComponent>
  ) { }


  rate(rating: number) {
    this.rating = rating;
    this.ratingSelected.emit(rating);
  }

  closePopup(){
    this.dialogRef.close()
  }
}
