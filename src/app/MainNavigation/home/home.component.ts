import { Component, OnInit } from '@angular/core';


interface Pharmacy {
  pharmacyName: string;
  pharmacyAddress: string;
  storeHours: string;
  rating: number;
}

interface Sort {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pharmacies: Pharmacy[] = [];


  ngOnInit(): void {
    this.pharmacies =this.generateDummyData(5);

  }


  generateDummyData(count: number): Pharmacy[] {
    const dummyPharmacy: Pharmacy[] = [];

    for (let i = 1; i <= count; i++ ) {

      const rawRating = 4.03 + i / 20;
      const roundedRating = parseFloat(rawRating.toFixed(2));

      const pharmacy: Pharmacy = {
        pharmacyName: `Pharmacy ` + i,
        pharmacyAddress: `Brgy. ` + i,
        storeHours: `8:00 AM - 8:00 PM`,
        rating: roundedRating,
      };
      console.log(dummyPharmacy)
      dummyPharmacy.push(pharmacy);
    }
    return dummyPharmacy;
  }



  //dropdown select menu
  sorting: Sort[] = [
    {value: 'aToZ', viewValue: 'Name: Ascending'},
    {value: 'zToA', viewValue: 'Name: Descending'},
    {value: 'rating', viewValue: 'Rating'},
    {value: 'distance', viewValue: 'Distance'},
  ];
}
