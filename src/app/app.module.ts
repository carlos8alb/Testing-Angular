import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DoctorComponent } from './intermediate2/doctor/doctor.component';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './advanced/routes/app.routes';
import { NavbarComponent } from './advanced/navbar/navbar.component';
import { RouterdoctorComponent } from './advanced/routerdoctor/routerdoctor.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    HospitalComponent,
    NavbarComponent,
    RouterdoctorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
