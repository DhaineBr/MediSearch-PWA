import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss']
})
export class CancelComponent {
  constructor(
    private dialogRef: MatDialogRef<CancelComponent>
  ) { }

  closePopup(){
    this.dialogRef.close()
  }
}
