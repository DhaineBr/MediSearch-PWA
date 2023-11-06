import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';

interface Reservation {
  id: string;
  storeName: string;
  storeAddress: string;
  validityPeriod: Date;
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  reservations: Reservation[] = [];
  constructor(
    private _customers : CustomersService
  ) {}
  ngOnInit(): void {
    this.getordersbyID(6)
  }
  ordersinfo: any
  getordersbyID(id:number) {
    this._customers.gettransactions(id).subscribe((response) => {
      this.ordersinfo = response;
      console.log(this.ordersinfo)
    })
  }
  // generateDummyData(count: number): Reservation[] {
  //   const dummyReservation: Reservation[] = [];

  //   for (let i = 1; i <= count; i++) {
  //     const validityPeriod = new Date('2023-10-24');
  //     validityPeriod.setDate(validityPeriod.getDate() + i);

  //     const reservation: Reservation = {
  //       orderID: `932105321${i}`,
  //       storeName: `Pharmacy ${i}`,
  //       storeAddress: `Brgy. ${i}`,
  //       validityPeriod: validityPeriod,
  //     };

  //     dummyReservation.push(reservation);
  //   }
  //   return dummyReservation;
  // }
}
