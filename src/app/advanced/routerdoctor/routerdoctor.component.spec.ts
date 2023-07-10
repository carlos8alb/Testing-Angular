import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterdoctorComponent } from './routerdoctor.component';
import {  Subject, from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

class FakeRouter {
  navigate(params: any) {}
}

class FakeActivatedRoute {
  private subject$ = new Subject();

  get params() {
    return this.subject$.asObservable()
  }

  push(value: any) {
    this.subject$.next(value);
  }
}

describe('RouterdoctorComponent', () => {
  let component: RouterdoctorComponent;
  let fixture: ComponentFixture<RouterdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterdoctorComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RouterdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to doctor when save it', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    component.saveDoctor();
    expect(spy).toHaveBeenCalledWith(['doctor', '12']);
  });

  it('should set "id = new"', () => {
    const activatedRoute: unknown = TestBed.inject(ActivatedRoute);
    (activatedRoute as FakeActivatedRoute).push({ id: 'new' });
    expect(component.id).toBe('new');
  });
});
