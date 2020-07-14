import { isEven } from './math';

describe('isEven', () => {
  it('should return true if given an even number', () => {
    expect(isEven(2)).toBeTruthy();
  });

  it('should return false if given an odd number', () => {
    expect(isEven(1)).toBeFalsy();
  });
});
