import {
  Component,
  Input,
  Output,
  ViewChild,
  OnInit,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: [],
  imports: [FormsModule],
  standalone: true,
})
export class CounterComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress!: ElementRef;

  @Input('name') str: string = 'Str';
  @Input() progress: number = 50;
  @Output('updateValue') changeValue: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onChanges(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.txtProgress.nativeElement.value = this.progress;

    this.changeValue.emit(this.progress);
  }

  onChangeValue(value: number) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      return;
    }

    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }

    this.progress = this.progress + value <= 100
    ? this.progress + value
    : 100

    this.changeValue.emit(this.progress);
  }
}
