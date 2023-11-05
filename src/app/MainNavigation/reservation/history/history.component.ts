import { Component, OnInit } from '@angular/core';
import { HistoryDetailComponent } from '../history-detail/history-detail.component';
import { MatDialog } from '@angular/material/dialog';

interface Reservation{
  orderID: string;
  storeName: string;
  storeAddress: string;
  transactionDate: Date
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit{

  reservations: Reservation[] = [];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.reservations = this.generateDummyData(10);
  }

  generateDummyData(count: number): Reservation[] {
    const dummyReservation: Reservation[] = [];

    for (let i = 1; i <= count; i++) {
      const transactionDate = new Date('2023-10-24');
      transactionDate.setDate(transactionDate.getDate() + i);

      const reservation: Reservation = {
        orderID: `932105321${i}`,
        storeName: `Pharmacy ${i}`,
        storeAddress: `Brgy. ${i}`,
        transactionDate: transactionDate,
      };

      dummyReservation.push(reservation);
    }
    return dummyReservation;
  }

  historyDetail(): void {
    const dialogRef = this.dialog.open(HistoryDetailComponent, {
      width: '45vh',
      height: '35vh',
      data: { }
    });
  }
}
