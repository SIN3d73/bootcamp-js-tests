import { hasElements, mapUsers } from './arrays';

describe('arrays', () => {

  describe('hasElements', () => {
    it('should return false on empty array', () => {
      const result = hasElements([]);
      expect(result).toBe(false);
    });

    it('should return true on filled array', () => {
      const result = hasElements([1, 2]);
      expect(result).toBeTruthy();
    });

    it('should return false on no argument', () => {
      const result = hasElements();
      expect(result).toBe(false);
    });

    it('should return true when array is filled with undefined and null', () => {
      const result = hasElements([null, undefined, ]);
      expect(result).toBe(true);
    });
  });

  describe('getUser', () => {
    it('should return empty array when no argument', () => {
      const result = mapUsers()
      expect(result).toEqual([]);
    });
  });

});
