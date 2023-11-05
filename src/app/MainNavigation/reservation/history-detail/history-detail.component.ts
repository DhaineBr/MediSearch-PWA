import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent {

  constructor(
    private dialogRef: MatDialogRef<HistoryDetailComponent>
  ) { }

  closePopup(){
    this.dialogRef.close()
  }
}
