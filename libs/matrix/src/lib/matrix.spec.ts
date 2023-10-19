import { generateIntMatrix, getRandomIntInclusive } from './matrix';

describe('matrix', () => {
  it('should give random number between min and max inclusive', () => {
    expect(getRandomIntInclusive(1, 1)).toBe(1);
    expect(getRandomIntInclusive(1.99, 0.01)).toBe(1);

    expect(getRandomIntInclusive(-1, -1)).toBe(-1);
    expect(getRandomIntInclusive(-1.99, -0.01)).toBe(-1);

    expect(getRandomIntInclusive(-10, 10)).toBeGreaterThanOrEqual(-10);
    expect(getRandomIntInclusive(-10, 10)).toBeLessThanOrEqual(10);

    expect(getRandomIntInclusive(0x10, 0x10)).toBe(16);
    expect(getRandomIntInclusive(0o10, 0o10)).toBe(8);

    expect(getRandomIntInclusive(0.0, 0.0)).toBe(0);
    expect(getRandomIntInclusive(1e2, 1e2)).toBe(100);
  });

  it('should generate matrix with random numbers', () => {
    let matrix = generateIntMatrix(2, -100, 100);
    expect(matrix.length).toEqual(2);

    matrix = generateIntMatrix(2.001, -100, 100);
    expect(matrix.length).toEqual(2);

    matrix = generateIntMatrix(2.99, -100, 100);
    expect(matrix.length).toEqual(2);

    matrix = generateIntMatrix(10, -100, 100);
    expect(matrix.length).toEqual(10);
  });
});
