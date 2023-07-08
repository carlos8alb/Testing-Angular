import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DoctorComponent } from './doctor.component';
import { DoctorService } from './doctor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Doctor component', () => {
  let component: DoctorComponent;
  let fixture: ComponentFixture<DoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorComponent],
      imports: [HttpClientTestingModule ]
    });

    fixture = TestBed.createComponent(DoctorComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should return doctor name', () => {
    const name = 'Carlos'
    const response = component.greetDoctor(name)
    expect(response).toContain(name);
  });
});
