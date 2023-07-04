import { EMPTY, empty, from, throwError } from 'rxjs';
import { DoctorsComponent } from './doctors.component';
import { DoctorsService } from './doctors.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

describe('Test Spy', () => {
  let component: DoctorsComponent;
  let doctorService: DoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, DoctorsService],
    });

    const fixture = TestBed.createComponent(DoctorsComponent);
    component = fixture.componentInstance;
    doctorService = fixture.debugElement.injector.get(DoctorsService);
  });

  it('should load doctors in OnInit', () => {
    const doctors = ['Doctor1', 'Doctor2', 'Doctor3'];

    spyOn(doctorService, 'getDoctors').and.callFake(() => from([doctors]));

    component.ngOnInit();
    expect(component.doctors.length).toBeGreaterThan(0);
  });

  it('should call server to add doctor', () => {
    const spy = spyOn(doctorService, 'addDoctor').and.callFake(() => EMPTY);

    component.addDoctor();
    expect(spy).toHaveBeenCalled();
  });

  it('should add new doctor to array doctors', () => {
    const doctor = { id: 1, name: 'Carlos' };
    spyOn(doctorService, 'addDoctor').and.returnValue(from([doctor]));

    component.addDoctor();
    expect(component.doctors.indexOf(doctor)).toBeGreaterThanOrEqual(0);
  });

  it('should show error message', () => {
    const error = 'Error adding doctor';
    spyOn(doctorService, 'addDoctor').and.returnValue(throwError(() => error));

    component.addDoctor();
    expect(component.errorMessage).toBe(error);
  });

  it('should call server to delete doctor', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(doctorService, 'deleteDoctor').and.returnValue(EMPTY);
    component.deleteDoctor('1');
    expect(spy).toHaveBeenCalledWith('1');
  });

  it('should NOT call server to delete doctor', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(doctorService, 'deleteDoctor').and.returnValue(EMPTY);
    component.deleteDoctor('1');
    expect(spy).not.toHaveBeenCalledWith('1');
  });
});
