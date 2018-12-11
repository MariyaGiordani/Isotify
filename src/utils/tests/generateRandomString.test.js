import { generateRandomString } from '../generateRandomString';

describe('generateRandomString', () => {

  it('should generate random string with valid characters', () => {
    const regex = /[0-9A-Za-z]$/g;
    const length = 20;

    const returnedValue = generateRandomString(length);

    expect(regex.test(returnedValue)).toBe(true);
  });

  it('should not generate random string with invalid characters', () => {
    const regex = /^[0-9A-Za-z]$/g;
    const length = 20;

    const returnedValue = generateRandomString(length);

    expect(regex.test(returnedValue)).toBe(false);
  });

});