import { Component, OnInit } from '@angular/core';
import { DoctorsService } from './doctors.service';

@Component({
  selector: 'app-doctors',
  template: ` <p>doctors works!</p> `,
})
export class DoctorsComponent implements OnInit {
  public doctors: any[] = [];
  public errorMessage!: string;

  constructor(private readonly doctorService: DoctorsService) {}

  ngOnInit() {
    this.doctorService
      .getDoctors()
      .subscribe((doctors) => (this.doctors = doctors));
  }

  addDoctor() {
    const doctor = { nombre: 'Doctor Carlos' };
    this.doctorService.addDoctor(doctor).subscribe({
      next: (doctorDB) => this.doctors.push(doctorDB),
      error: (err) => (this.errorMessage = err),
    });
  }

  deleteDoctor(id: string) {
    const response = confirm('Are you sure to delete the doctor?');
    if (response) this.doctorService.deleteDoctor(id);
  }
}
