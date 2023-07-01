import { increment } from './numbers';

describe('Test numbers', () => {
  it('should return 100 if number is greater than 100', () => {
    const response = increment(300)
    expect(response).toBe(100)
  });

  it('should return num + 1  if number is less than 100', () => {
    const response = increment(50)
    expect(response).toBe(51)
  });

});
