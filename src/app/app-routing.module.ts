import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { MainNavigationComponent } from './MainNavigation/main-navigation.component';
import { MainNavigationModule } from './MainNavigation/main-navigation.module';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', loadChildren: () => import ('./MainNavigation/main-navigation.module').then(m=>MainNavigationModule)},
  { path: 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
