import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'homepage', component: HomepageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'client', component: ClientDetailsComponent},
  { path: 'confirm', component: ConfirmPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
