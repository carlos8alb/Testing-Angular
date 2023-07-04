import { EventEmitter } from '@angular/core';

export class Player2 {
  hp: number;
  hpChange = new EventEmitter<number>();

  constructor() {
    this.hp = 100;
  }

  damage(amount: number) {
    if (amount >= this.hp) {
      this.hp = 0;
    } else {
      this.hp -= amount;
    }

    this.hpChange.emit(this.hp)

  }
}
