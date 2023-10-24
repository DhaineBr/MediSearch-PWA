import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

interface Store {
  storeName: string;
  storeAddress: string;
  storeHours: string;
  storeRating: number;
}

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.scss']
})

export class PharmaciesComponent implements OnInit{
  @ViewChild('button2', { read: ElementRef }) button2!: ElementRef;
  @ViewChild('button3', { read: ElementRef }) button3!: ElementRef;
  @ViewChild('button4', { read: ElementRef }) button4!: ElementRef;

  stores: Store[] = [];
  sortedStores: Store[] = [];


  ngOnInit(): void {
    this.stores = this.generateDummyData(10);
  }


  generateDummyData(count: number): Store[] {
    const dummyStore: Store[] = [];

    for (let i = 1; i <= count; i++ ) {
      const store: Store = {
        storeName: `Pharmacy ` + i,
        storeAddress: `Brgy. ` + i,
        storeHours: `8:00 AM - 8:00 PM`,
        storeRating: 4.03 + (i/20),
      };

      dummyStore.push(store);
    }
    return dummyStore;
  }

  activeButton: HTMLButtonElement | null = null;

  toggleButtonActive(event: MouseEvent, button: HTMLButtonElement) {
    if (this.activeButton === button) {

      button.classList.remove('active');
      this.activeButton = null;
    } else {

      if (this.activeButton) {
        this.activeButton.classList.remove('active');
      }

      button.classList.add('active');
      this.activeButton = button;
    }


    if (button === this.button2.nativeElement) {
      this.sortByRating();
    }

    if (button === this.button3.nativeElement) {
      this.sortByName();
    }

    if (button === this.button4.nativeElement) {
      this.sortByNameReverse();
    }



  }

  sortByRating() {
    this.stores.sort((a, b) => b.storeRating - a.storeRating);
  }

  sortByName()  {
    this.stores.sort((a, b) => a.storeName.localeCompare(b.storeName));
  }

  sortByNameReverse() {
    this.stores.sort((a, b) => b.storeName.localeCompare(a.storeName));
  }

}

