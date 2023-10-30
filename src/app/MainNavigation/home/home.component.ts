import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  pharmacyList: Pharmacy[] = [];

  ngOnInit(): void {
    this.pharmacies =this.generateDummyData(5);
    this.pharmacyList = this.generateDummyData(10)
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
  selectedSorting: string = 'aToZ';

  sorting: Sort[] = [
    {value: 'aToZ', viewValue: 'Name: Ascending'},
    {value: 'zToA', viewValue: 'Name: Descending'},
    {value: 'rating', viewValue: 'Rating'},
    {value: 'distance', viewValue: 'Distance'},
  ];

  onSortingChange() {
    console.log('Selected sorting option:', this.selectedSorting);

    if (this.selectedSorting === 'aToZ') {
      this.optionAToZ();
    } else if (this.selectedSorting === 'zToA') {
      this.optionZToA();
    } else if (this.selectedSorting === 'rating') {
      this.optionRating();
    } else if (this.selectedSorting === 'distance') {
      this.optionDistance();
    }
  }


  optionAToZ()  {
    this.pharmacyList.sort((a, b) => a.pharmacyName.localeCompare(b.pharmacyName));
  }

  optionZToA()  {
    this.pharmacyList.sort((a, b) => b.pharmacyName.localeCompare(a.pharmacyName));
  }

  optionRating()  {
    this.pharmacyList.sort((a, b) => b.rating - a.rating);
  }

  optionDistance()  {

  }
}
