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
import { HistoryComponent } from './reservation/history/history.component';
import { HistoryDetailComponent } from './reservation/history-detail/history-detail.component';
import { ReservationDetailComponent } from './reservation/reservation-detail/reservation-detail.component';
import { SearchComponent } from './home/search/search.component';

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
    {path: 'history', component: HistoryComponent},
    {path: 'history-detail', component: HistoryDetailComponent},
    {path: 'reservation-detail', component: ReservationDetailComponent},
    {path: 'search', component: SearchComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainNavigationRoutingModule { }
