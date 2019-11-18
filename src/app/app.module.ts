import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationAlertsComponent } from './location-alerts/location-alerts.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LocationListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    LocationListComponent,
    LocationAlertsComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


