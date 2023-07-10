import { CounterComponent } from './counter.component';

describe('Counte component Unit Test', () => {
  let component: CounterComponent;
  beforeEach(() => {
    component = new CounterComponent();
  });

  it('should not be greater than 100 progress var', () => {
    component.progress = 50;
    component.onChangeValue(400)
    expect(component.progress).toBe(100)
  })
});
