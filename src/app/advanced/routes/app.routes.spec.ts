import { DoctorComponent } from 'src/app/intermediate2/doctor/doctor.component';
import { ROUTES } from './app.routes';

describe('Routes Test', () => {
  it('should exists route /doctor/:id', () => {
    expect(ROUTES).toContain({
      path: 'doctor/:id',
      component: DoctorComponent,
    });
  });
});
