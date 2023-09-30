import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainNavigationRoutingModule } from './main-navigation-routing.module';
import { MainNavigationComponent } from './main-navigation.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainNavigationComponent
  ],
  imports: [
    CommonModule,
    MainNavigationRoutingModule,
    FormsModule
    
  ]
})
export class MainNavigationModule { }
