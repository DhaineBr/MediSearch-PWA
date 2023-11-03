import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavigationRoutingModule } from './main-navigation-routing.module';
import { MainNavigationComponent } from './main-navigation.component';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AccountComponent } from './account/account.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { PharmaciesComponent } from './pharmacies/pharmacies.component';
import { PharmacyPageComponent } from './home/pharmacy-page/pharmacy-page.component';
import { CartComponent } from './home/cart/cart.component';
import { InfoComponent } from './account/info/info.component';
import { CartPopupComponent } from './home/pharmacy-page/cart-popup/cart-popup.component';
import { HistoryComponent } from './reservation/history/history.component';
import { HistoryDetailComponent } from './reservation/history-detail/history-detail.component';
import { ReservationDetailComponent } from './reservation/reservation-detail/reservation-detail.component';
import { MapComponent } from './home/map/map.component';



@NgModule({
  declarations: [
    MainNavigationComponent,
    AccountComponent,
    HomeComponent,
    ReservationComponent,
    PharmaciesComponent,
    PharmacyPageComponent,
    CartComponent,
    InfoComponent,
    CartPopupComponent,
    HistoryComponent,
    HistoryDetailComponent,
    ReservationDetailComponent,
    MapComponent,

  ],
  imports: [
    CommonModule,
    MainNavigationRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MainNavigationModule { }
