import { returnNames } from './arrays';

describe('Test arrays', () => {
  it('should return at least 4 names', () => {
    const response = returnNames()
    expect(response.length).toBeGreaterThanOrEqual(4)
  });

  it('should exists Carlos and Pedro', () => {
    const response = returnNames()
    expect(response).toContain('Carlos')
    expect(response).toContain('Pedro')
  });

});
