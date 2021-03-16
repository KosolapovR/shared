import { ceil } from '../index';

const positiveFixtures = [
  { testValue: 1888.64528925, digits: 2, expectedValue: 1888.65 },
  { testValue: 1795490.88999999, digits: 2, expectedValue: 1795490.89 },
  { testValue: 1795490.00999999, digits: 2, expectedValue: 1795490.01 },
  { testValue: 1795490.88999999, digits: 4, expectedValue: 1795490.89 },
  { testValue: 1795490.8899, digits: 6, expectedValue: 1795490.8899 },
  { testValue: 0.00001, digits: 2, expectedValue: 0.01 },
  { testValue: 0.0009999, digits: 3, expectedValue: 0.001 },
  { testValue: 0.0009999, digits: 4, expectedValue: 0.001 },
  { testValue: '245098.03', digits: 2, expectedValue: 245098.03 },
  { testValue: 1944011.00000001, digits: 2, expectedValue: 1944011.01 },
  { testValue: 1944011.00000000, digits: 2, expectedValue: 1944011 },
  { testValue: 1937274.00000000, digits: 2, expectedValue: 1937274 },
  { testValue: 1929050.00000000, digits: 2, expectedValue: 1929050 },
  { testValue: 0.0004901960784313725, digits: 8, expectedValue: 0.00049020 },
  { testValue: 0.123, digits: 2, expectedValue: 0.13 },
  { testValue: 55.51, digits: 1, expectedValue: 55.6 },
  { testValue: 14.41273483, digits: 2, expectedValue: 14.42 },
  { testValue: 68.1999999999, digits: 2, expectedValue: 68.20 },
  { testValue: 68.19999999999999, digits: 2, expectedValue: 68.20 },
];


describe('ceil signs correctly', () => {
  it('Positive number ceil correctly', () => {
    positiveFixtures.forEach((fixture) => {
      expect(ceil(fixture.testValue, fixture.digits))
        .toEqual(fixture.expectedValue);
    });
  });
});
