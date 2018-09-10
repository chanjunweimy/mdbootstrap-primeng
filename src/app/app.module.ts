import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';

// primeng card
import { CardModule } from 'primeng/card';

// primeng checkbox
import { CheckboxModule } from 'primeng/checkbox';

import { CalendarModule } from 'primeng/calendar';

import { TableModule, Table } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    CardModule,
    CheckboxModule,
    CalendarModule,
    TableModule
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
