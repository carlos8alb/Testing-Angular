import { userLoggedIn } from './booleans';

describe('Test booleans', () => {
  it('should return true', () => {
    const response = userLoggedIn()
    expect(response).toBeTruthy()
  });

});
