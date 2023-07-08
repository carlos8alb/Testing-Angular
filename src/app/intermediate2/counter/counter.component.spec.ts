import { TestBed, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { CounterComponent } from './counter.component';
import { FormsModule } from '@angular/forms';

describe('Incremendator Component', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CounterComponent, FormsModule],
    });

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should show the str var', () => {
    component.str = 'Loading';
    fixture.detectChanges();
    const elem: HTMLElement | null = compiled.querySelector('h3');
    expect(elem?.textContent).toContain(component.str);
  });

  it('should change progress', fakeAsync(() => {
    component.onChangeValue(5);
    const input: HTMLInputElement | null = compiled.querySelector('input');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(input?.value).toBe('55');
    });
  }));

  it('should change progress when click button', () => {
    const buttonDecrement: HTMLElement | null = compiled.getElementsByClassName(
      'btn'
    )[0] as HTMLElement;
    const buttonIncrement: HTMLElement | null = compiled.getElementsByClassName(
      'btn'
    )[1] as HTMLElement;
    buttonDecrement.click();
    expect(component.progress).toBe(45);
    buttonIncrement.click();
    expect(component.progress).toBe(50);
  });

  it('should show the progress var in title, after click', () => {
    const progressTitle = compiled.querySelector('h3');
    const buttonDecrement: HTMLElement | null = compiled.getElementsByClassName(
      'btn'
    )[0] as HTMLElement;
    buttonDecrement.click();
    fixture.detectChanges();
    expect(progressTitle?.textContent).toContain(component.progress);
  });
});
