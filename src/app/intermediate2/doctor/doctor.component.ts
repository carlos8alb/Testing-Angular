import { Component } from '@angular/core';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styles: [],
})
export class DoctorComponent {
  doctors!: any[];

  constructor(public doctorService: DoctorService) {}

  greetDoctor(name: string) {
    return `Hello ${name}`;
  }

  getDoctors() {
    this.doctorService
      .getDoctors()
      .subscribe((doctors) => (this.doctors = doctors));
  }
}
