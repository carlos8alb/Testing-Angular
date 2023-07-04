import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DoctorsService {
  constructor(private http: HttpClient) {}

  getDoctors() {
    return this.http
      .get('...')
      .pipe(map((resp: any) => resp['doctors']));
  }

  addDoctor(doctor: any) {
    return this.http
      .post('...', doctor)
      .pipe(map((resp: any) => resp['doctor']));
  }

  deleteDoctor(id: string) {
    return this.http
      .delete('...')
      .pipe(map((resp: any) => resp['doctor']));
  }
}
