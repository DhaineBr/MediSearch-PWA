import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainNavigationRoutingModule } from './main-navigation-routing.module';
import { MainNavigationComponent } from './main-navigation.component';

import { FormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { PharmaciesComponent } from './pharmacies/pharmacies.component';

@NgModule({
  declarations: [
    MainNavigationComponent,
    AccountComponent,
    HomeComponent,
    ReservationComponent,
    PharmaciesComponent
  ],
  imports: [
    CommonModule,
    MainNavigationRoutingModule,
    FormsModule

  ]
})
export class MainNavigationModule { }
