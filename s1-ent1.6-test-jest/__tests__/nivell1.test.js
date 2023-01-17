const {
  sumar,
  restar,
  multiplicar,
  dividir,
} = require('../app/1.1 sumar-restar-mult-div');

describe('sumar', () => {
  test('sumar throws error if one param is undefined or null', () => {
    expect(() => sumar(2, null)).toThrow('input data missing (undefined)');
  });
  test('sumar throws error if one param is NaN', () => {
    expect(() => sumar('a', 9)).toThrow('invalid input data');
  });
  test('sumar 2 + 3 is equal to 5', () => {
    const result = sumar(2, 3);
    expect(result).toBe(5);
  });
});
// --------------------------------------------
describe('restar', () => {
  test('restar throws error if one param is undefined or null', () => {
    expect(() => restar(2, null)).toThrow('input data missing (undefined)');
  });
  test('restar throws error if one param is NaN', () => {
    expect(() => restar('a', 9)).toThrow('invalid input data');
  });
  test('restar 2 + 3 is equal to 5', () => {
    const result = restar(5, 2);
    expect(result).toBe(3);
  });
});
// --------------------------------------------
describe('multiplicar', () => {
  test('multiplicar throws error if one param is undefined or null', () => {
    expect(() => multiplicar(2, null)).toThrow('input data missing (undefined)');
  });
  test('multiplicar throws error if one param is NaN', () => {
    expect(() => multiplicar('a', 9)).toThrow('invalid input data');
  });
  test('multiplicar 5 * 2 is equal to 10', () => {
    const result = multiplicar(5, 2);
    expect(result).toBe(10);
  });
});
// --------------------------------------------
describe('dividir', () => {
  test('dividir throws error if one param is undefined or null', () => {
    expect(() => dividir(2, null)).toThrow('input data missing (undefined)');
  });
  test('dividir throws error if one param is NaN', () => {
    expect(() => dividir('a', 9)).toThrow('invalid input data');
  });
  test('dividir throws error if BOTH params are 0', () => {
    expect(() => dividir(0, 0)).toThrow('result is undetermined');
  });
  test('dividir throws error the second param is 0', () => {
    expect(() => dividir(5, 0)).toThrow('result does not exist, denominator is zero');
  });
  test('dividir 10 * 2 is equal to 5', () => {
    const result = dividir(10, 2);
    expect(result).toBe(5);
  });
});

/*Using toStrictEqual is preferred over using toEqual. toEqual 
simply ignores undefined values, whereas toStrictEqual takes them 
into account.*/

/* For floating point equality, use toBeCloseTo instead of toEqual, 
because you don't want a test to depend on a tiny rounding error. */
