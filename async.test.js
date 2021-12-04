import moxios from 'moxios';
import { getUser } from './async';

describe('async', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('getUser', () => {
    it('should return response text', async () => {
      moxios.stubRequest('http://localhost:8080/user', {
        status: 200,
        responseText: 'hello'
      });
      const data = await getUser();
      expect(data).toBe('hello');
    });
  });

});
