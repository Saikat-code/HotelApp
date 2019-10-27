import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsService } from './fireserv/details.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    ClientDetailsComponent,
    ConfirmPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgbModule,
  ],
  providers: [ DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
