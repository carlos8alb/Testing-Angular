import { Routes } from '@angular/router';
import { CounterComponent } from 'src/app/intermediate2/counter/counter.component';
import { DoctorComponent } from 'src/app/intermediate2/doctor/doctor.component';
import { HospitalComponent } from 'src/app/intermediate2/hospital/hospital.component';

export const ROUTES: Routes = [
  { path: 'hospital', component: HospitalComponent },
  { path: 'doctor/:id', component: DoctorComponent },
  { path: '**', component: CounterComponent },
];
