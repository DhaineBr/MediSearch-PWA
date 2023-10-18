import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AddressesComponent } from './addresses/addresses.component';
import { FollowingComponent } from './following/following.component';
import { HistoryComponent } from './history/history.component';
import { ReviewsComponent } from './reviews/reviews.component';


const routes: Routes = [
  {path: 'account',
    component: AccountComponent,
  children:  [
    {path: 'info', component: AccountInfoComponent},
    {path: 'addresses', component: AddressesComponent},
    {path: 'history', component: HistoryComponent},
    {path: 'following', component: FollowingComponent},
    {path: 'reviews', component: ReviewsComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
