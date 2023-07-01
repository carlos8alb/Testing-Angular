import { message } from './string';

describe('Test strings', () => {
  it('should return a string', () => {
    const response = message('Carlos');
    expect(typeof response).toBe('string');
  });

  it('should return a greeting with name sent', () => {
    const name = 'Carlos'
    const response = message(name);
    expect(response).toContain(name);
  });
});
