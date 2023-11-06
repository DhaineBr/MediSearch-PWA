import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
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
}

