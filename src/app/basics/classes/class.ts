export class Player {
  hp: number;

  constructor() {
    this.hp = 100;
  }

  damage(amount: number) {
    if (amount >= this.hp) {
      this.hp = 0;
    } else {
      this.hp -= amount;
    }

    return this.hp;
  }
}
