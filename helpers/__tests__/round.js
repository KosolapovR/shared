import { round } from '../index';

const positiveFixtures = [
  // { testValue: 1888.64528925, digits: 2, expectedValue: 1888.65 },
  { testValue: 1795490.88999999, digits: 2, expectedValue: 1795490.89 },
  { testValue: 1795490.00999999, digits: 2, expectedValue: 1795490.01 },
  { testValue: 1795490.88999999, digits: 4, expectedValue: 1795490.89 },
  { testValue: 1795490.8899, digits: 6, expectedValue: 1795490.8899 },
  { testValue: 0.00001, digits: 2, expectedValue: 0 },
  { testValue: 0.0009999, digits: 3, expectedValue: 0.001 },
  { testValue: 0.0009999, digits: 4, expectedValue: 0.001 },
  { testValue: '245098.03', digits: 2, expectedValue: 245098.03 },
  { testValue: 1944011.00000001, digits: 2, expectedValue: 1944011 },
  { testValue: 1944011.00000000, digits: 2, expectedValue: 1944011 },
  { testValue: 1937274.00000000, digits: 2, expectedValue: 1937274 },
  { testValue: 1929050.00000000, digits: 2, expectedValue: 1929050 },
  { testValue: 0.0004901960784313725, digits: 8, expectedValue: 0.00049020 },
  { testValue: 68.14499999, digits: 2, expectedValue: 68.14 },
  { testValue: 68.144999999, digits: 2, expectedValue: 68.14 },
  { testValue: 68.1449999999, digits: 2, expectedValue: 68.14 },
  { testValue: 68.14499999999, digits: 2, expectedValue: 68.14 },
  { testValue: 68.144999999999, digits: 2, expectedValue: 68.14 },
  { testValue: 12345678.14499999, digits: 2, expectedValue: 12345678.14 },

];

const formatingFixtures = [
  { testValue: '1944011.00000001', digits: 2, expectedValue: '1 944 011' },
  { testValue: '1944011.00000001', digits: 8, expectedValue: '1 944 011.00000001' },
  { testValue: '1937274.00000000', digits: 2, expectedValue: '1 937 274' },
  { testValue: '1929050.00000000', digits: 2, expectedValue: '1 929 050' },
];

const stringifiedFixtures = [
  { testValue: 0.0004901960784313725, digits: 8, expectedValue: 0.0004902 },
];

const negativeFixtures = [
  { testValue: -1795490.88999999, digits: 2, expectedValue: -1795490.89 },
  { testValue: -1795490.00999999, digits: 2, expectedValue: -1795490.01 },
  { testValue: -1795490.88999999, digits: 4, expectedValue: -1795490.89 },
  { testValue: -1795490.8899, digits: 6, expectedValue: -1795490.8899 },
  { testValue: -0.00001, digits: 2, expectedValue: 0 },
  { testValue: -0.0009999, digits: 3, expectedValue: -0.001 },
  { testValue: -0.0009999, digits: 4, expectedValue: -0.001 },
];

describe('Round signs correctly', () => {
  it('Positive number round correctly', () => {
    positiveFixtures.forEach((fixture) => {
      expect(round(fixture.testValue, fixture.digits, false, true))
        .toEqual(fixture.expectedValue);
    });
  });

  it('Negative number round correctly', () => {
    negativeFixtures.forEach((fixture) => {
      expect(round(fixture.testValue, fixture.digits, false, true))
        .toEqual(fixture.expectedValue);
    });
  });

  it('Formatted with space correctly', () => {
    formatingFixtures.forEach((fixture) => {
      expect(round(fixture.testValue, fixture.digits, true))
        .toEqual(fixture.expectedValue);
    });
  });

  it('Stringify without space correctly', () => {
    stringifiedFixtures.forEach((fixture) => {
      expect(round(fixture.testValue, fixture.digits, false))
        .toEqual(fixture.expectedValue);
    });
  });

  it('Zero', () => {
    expect(round(0, 5, false, true))
      .toEqual(0);
  });

  it('Small number without exponential', () => {
    expect(round(0.00000001234234234234, 8, false, false))
      .toEqual('0.00000001');
  });
});
