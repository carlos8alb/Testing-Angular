import { Player } from './class';

describe('Test class', () => {
  const player = new Player();
  beforeEach(() => {
    player.hp = 100
  });

  it('should return 80 if damage is 20', () => {
    const response = player.damage(20);
    expect(response).toBe(80);
  });

  it('should return 50 if damage is 50', () => {
    const response = player.damage(20);
    expect(response).toBe(80);
  });

  it('should return 0 if damage is greater than 100', () => {
    const response = player.damage(120);
    expect(response).toBe(0);
  });
});
