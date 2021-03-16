import { cropNumberToN } from '../index';

const positiveFixtures = [
  { testValue: 1888.64528925, digits: 2, expectedValue: 1888.64 },
  { testValue: 1795490.88999999, digits: 2, expectedValue: 1795490.88 },
  { testValue: 1795490.00999999, digits: 2, expectedValue: 1795490 },
  { testValue: 1795490.88999999, digits: 4, expectedValue: 1795490.8899 },
  { testValue: 1795490.8899, digits: 6, expectedValue: 1795490.8899 },
  { testValue: 0.00001, digits: 2, expectedValue: 0 },
  { testValue: 0.0009999, digits: 3, expectedValue: 0 },
  { testValue: 0.0009999, digits: 4, expectedValue: 0.0009 },
  { testValue: '245098.03', digits: 2, expectedValue: 245098.03 },
  { testValue: 1944011.00000001, digits: 2, expectedValue: 1944011 },
  { testValue: 1944011.00000000, digits: 2, expectedValue: 1944011 },
  { testValue: 1937274.00000000, digits: 2, expectedValue: 1937274 },
  { testValue: 1929050.00000000, digits: 2, expectedValue: 1929050 },
  { testValue: 599999.904, digits: 2, expectedValue: 599999.9 },
  { testValue: '61561561.64999999', digits: 2, expectedValue: 61561561.64 },
  { testValue: 426666680, digits: 2, expectedValue: 426666680 },
  { testValue: 68.19999999999999, digits: 2, expectedValue: 68.19 },
  { testValue: 55.79, digits: 8, expectedValue: 55.79 },
];

const formatingFixtures = [
  { testValue: '1944011.00000001', digits: 2, expectedValue: '1 944 011' },
  { testValue: '1944011.00000001', digits: 8, expectedValue: '1 944 011.00000001' },
  { testValue: '1937274.00000000', digits: 2, expectedValue: '1 937 274' },
  { testValue: '1929050.00000000', digits: 2, expectedValue: '1 929 050' },
];

const negativeFixtures = [
  { testValue: -1795490.88999999, digits: 2, expectedValue: -1795490.88 },
  { testValue: -1795490.00999999, digits: 2, expectedValue: -1795490 },
  { testValue: -1795490.88999999, digits: 4, expectedValue: -1795490.8899 },
  { testValue: -1795490.8899, digits: 6, expectedValue: -1795490.8899 },
  { testValue: -0.00001, digits: 2, expectedValue: -0 },
  { testValue: -0.0009999, digits: 3, expectedValue: -0 },
  { testValue: -0.0009999, digits: 4, expectedValue: -0.0009 },
  { testValue: 7.71234e-8, digits: 8, expectedValue: 0.00000007 },

];
describe('Discards signs correctly', () => {
  it('Positive number discards correctly', () => {
    positiveFixtures.forEach((fixture) => {
      expect(cropNumberToN(fixture.testValue, fixture.digits, false, true))
        .toEqual(fixture.expectedValue);
    });
  });

  it('Negative number discards correctly', () => {
    negativeFixtures.forEach((fixture) => {
      expect(cropNumberToN(fixture.testValue, fixture.digits, false, true))
        .toEqual(fixture.expectedValue);
    });
  });

  it('Formatted with space correctly', () => {
    formatingFixtures.forEach((fixture) => {
      expect(cropNumberToN(fixture.testValue, fixture.digits, true))
        .toEqual(fixture.expectedValue);
    });
  });

  it('Zero', () => {
    expect(cropNumberToN(0, 5, false, true))
      .toEqual(0);
  });
});
