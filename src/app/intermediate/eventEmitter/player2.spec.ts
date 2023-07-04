import { Player2 } from './player2';

describe('Test Event Emitter', () => {
  let player = new Player2();

  beforeEach(() => {
    player = new Player2();
  });

  it('should emit event when receive damage', () => {
    let newHp = 0;
    player.hpChange.subscribe((hp) => (newHp = hp));
    player.damage(1000);
    expect(newHp).toBe(0);
  });

  it('should emit event and survive when receive damage less than 100', () => {
    let newHp = 0;
    player.hpChange.subscribe((hp) => (newHp = hp));
    player.damage(80);
    expect(newHp).toBe(20);
  });
});
