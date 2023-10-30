import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavigationComponent } from './main-navigation.component';
import { HomeComponent } from './home/home.component';
import { PharmaciesComponent } from './pharmacies/pharmacies.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AccountComponent } from './account/account.component';
import { PharmacyPageComponent } from './home/pharmacy-page/pharmacy-page.component';
import { CartComponent } from './home/cart/cart.component';
import { InfoComponent } from './account/info/info.component';
import { AddressesComponent } from './account/addresses/addresses.component';
import { FollowingComponent } from './account/following/following.component';
import { ReviewsComponent } from './account/reviews/reviews.component';
import { HistoryComponent } from './account/history/history.component';

const routes: Routes = [
  {path: 'home',
    component: MainNavigationComponent,
  children:  [
    {path: 'landing', component: HomeComponent},
    {path: 'pharmacy', component: PharmacyPageComponent},
    {path: 'cart', component: CartComponent},
    {path: 'reservation', component: ReservationComponent},
    {path: 'account', component: AccountComponent},
    {path: 'pharmacies', component: PharmaciesComponent},
    {path: 'info', component: InfoComponent},
    {path: 'addresses', component: AddressesComponent},
    {path: 'following', component: FollowingComponent},
    {path: 'reviews', component: ReviewsComponent},
    {path: 'history', component: HistoryComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainNavigationRoutingModule { }
