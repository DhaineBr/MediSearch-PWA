import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavigationComponent } from './main-navigation.component';
import { HomeComponent } from './home/home.component';
import { PharmaciesComponent } from './pharmacies/pharmacies.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AccountComponent } from './account/account.component';



const routes: Routes = [
  {path: 'home',
    component: MainNavigationComponent,
  children:  [
    {path: 'landing', component: HomeComponent},
    {path: 'reservation', component: ReservationComponent},
    {path: 'account', component: AccountComponent},
    {path: 'pharmacies', component: PharmaciesComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainNavigationRoutingModule { }
