import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PassengerDashboardComponent} from "./containers/passenger-dashboard.component";
import { CommonModule } from '@angular/common';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerListComponent } from './components/passenger-list/passenger-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PassengerAddComponent } from './components/passenger-add/passenger-add.component';

@NgModule({
  declarations:[PassengerDashboardComponent,PassengerCountComponent,PassengerListComponent,PassengerAddComponent],
  imports: [
      CommonModule,
      FormsModule,    
      HttpClientModule,
  ],
  exports:[PassengerDashboardComponent],
  
})

export  class PassengersModule { }