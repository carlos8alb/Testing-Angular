import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorComponent } from './intermediate2/doctor/doctor.component';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    HospitalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
