import getClassName from '../getClassName';

describe('getClassName', () => {

  it('should return base with modifier', () => {
    // Given
    const base = 'block-name';
    const modifier = 'modifier';
    const expectedValue = `${base}--${modifier}`;

    // When
    const returnedValue = getClassName(base, modifier);

    // Then
    expect(returnedValue).toBe(expectedValue);
  });

  it('should return empty string if modifier is not passed as a parameter', () => {
    const base = 'block-name';
    const modifier = undefined;
    const expectedValue = '';

    const returnedValue = getClassName(base, modifier);

    expect(returnedValue).toBe(expectedValue);
  });

});