import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavigationComponent } from './main-navigation.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AccountComponent } from './account/account.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: 'home', 
    component: MainNavigationComponent, 
  children:  [
    {path: 'landing', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'reservation', component: ReservationComponent},
    {path: 'account', component: AccountComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainNavigationRoutingModule { }
