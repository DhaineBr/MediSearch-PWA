import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavigationRoutingModule } from './main-navigation-routing.module';
import { MainNavigationComponent } from './main-navigation.component';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AccountComponent } from './account/account.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import { PharmaciesComponent } from './pharmacies/pharmacies.component';
import { PharmacyPageComponent } from './home/pharmacy-page/pharmacy-page.component';
import { CartComponent } from './home/cart/cart.component';
import { InfoComponent } from './account/info/info.component';
import { AddressesComponent } from './account/addresses/addresses.component';
import { FollowingComponent } from './account/following/following.component';
import { ReviewsComponent } from './account/reviews/reviews.component';
import { HistoryComponent } from './account/history/history.component';


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
    AddressesComponent,
    FollowingComponent,
    ReviewsComponent,
    HistoryComponent,
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
  ]
})
export class MainNavigationModule { }
