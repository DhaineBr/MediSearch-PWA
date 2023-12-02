import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],

})
export class AccountComponent {
  resetMapPopupState() {
    localStorage.removeItem('mapPopupShown');
  }
}
