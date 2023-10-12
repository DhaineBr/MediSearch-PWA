import { Component } from '@angular/core';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.scss']
})
export class PharmaciesComponent {
  activeButton: HTMLButtonElement | null = null;

  toggleButtonActive(event: MouseEvent, button: HTMLButtonElement) {
    // Deactivate the previously active button
    if (this.activeButton) {
      this.activeButton.classList.remove('active');
    }

    // Activate the clicked button
    button.classList.add('active');
    this.activeButton = button;
  }
}
