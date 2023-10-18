import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MainNavigationRoutingModule } from './main-navigation-routing.module';
import { MainNavigationComponent } from './main-navigation.component';

import { FormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { PharmaciesComponent } from './pharmacies/pharmacies.component';
import { AccountInfoComponent } from './account/account-info/account-info.component';
import { AddressesComponent } from './account/addresses/addresses.component';
import { HistoryComponent } from './account/history/history.component';
import { FollowingComponent } from './account/following/following.component';
import { ReviewsComponent } from './account/reviews/reviews.component';
import { AccountModule } from './account/account.module';

@NgModule({
  declarations: [
    MainNavigationComponent,
    AccountComponent,
    HomeComponent,
    ReservationComponent,
    PharmaciesComponent,
  ],
  imports: [
    CommonModule,
    MainNavigationRoutingModule,
    FormsModule,
    AccountModule

  ]
})
export class MainNavigationModule { }
