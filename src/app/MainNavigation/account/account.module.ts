import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { FormsModule } from '@angular/forms';

import { AccountInfoComponent } from './account-info/account-info.component';
import { AddressesComponent } from './addresses/addresses.component';
import { FollowingComponent } from './following/following.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AccountInfoComponent,
    AddressesComponent,
    FollowingComponent,
    ReviewsComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule
  ]
})
export class AccountModule { }
