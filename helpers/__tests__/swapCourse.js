import { swapCourse } from '../index';

describe('Swap course work correct', () => {
  it('Swap course if base course < 1 and has string type', () => {
    const baseCourse = '0.00013012';
    expect(swapCourse(baseCourse)).toEqual(parseFloat((1 / baseCourse).toFixed(10)));
  });

  // it('Swap course if base course = 1500000 and has string type', () => {
  //   const baseCourse = '1500000';
  //   expect(swapCourse(baseCourse)).toEqual(parseFloat((1 /  baseCourse).toFixed(10)));
  // });

  it('Swap course if base course < 1 and has float type', () => {
    const baseCourse = 0.00013012;
    expect(swapCourse(baseCourse)).toEqual(parseFloat((1 / baseCourse).toFixed(10)));
  });

  it('Swap course if base course > 1 and has string type', () => {
    const baseCourse = '1.00013012';
    expect(swapCourse(baseCourse)).toEqual(parseFloat((1 / baseCourse).toFixed(10)));
  });

  it('Swap course if base course > 1 and has float type', () => {
    const baseCourse = 1.00013012;
    expect(swapCourse(baseCourse)).toEqual(parseFloat((1 / baseCourse).toFixed(10)));
  });

  it('Swap course if base course = 1 and has string type', () => {
    const baseCourse = '1';
    expect(swapCourse(baseCourse)).toEqual(parseFloat((1 / baseCourse).toFixed(10)));
  });

  it('Swap course if base course = 1 and has int type', () => {
    const baseCourse = 1;
    expect(swapCourse(baseCourse)).toEqual(parseFloat((1 / baseCourse).toFixed(10)));
    expect(swapCourse(baseCourse)).toEqual(parseFloat((1 / baseCourse).toFixed(10)));
  });

  it('Swap course if base course = 1.00 and has string type', () => {
    const baseCourse = '1.00';
    expect(swapCourse(baseCourse)).toEqual(parseFloat((1 / baseCourse).toFixed(10)));
  });

  it('Swap course if base course = 1.00 and has float type', () => {
    const baseCourse = 1.00;
    expect(swapCourse(baseCourse)).toEqual(parseFloat((1 / baseCourse).toFixed(10)));
  });

  it('Don\'t swap course if base course = 0 and has string type', () => {
    const baseCourse = '0';
    expect(swapCourse(baseCourse)).toEqual(baseCourse);
  });

  it('Don\'t swap course if base course = 0 and has int type', () => {
    const baseCourse = 0;
    expect(swapCourse(baseCourse)).toEqual(0);
  });

  it('Swap 0.00002 correctly', () => {
    const baseCourse = 0.00002;
    expect(swapCourse(baseCourse)).toEqual(50000);
  });

  it('Don\'t swap course if base course = undefined|null|\'\'', () => {
    let baseCourse;
    expect(swapCourse(baseCourse)).toEqual(baseCourse);
    baseCourse = null;
    expect(swapCourse(baseCourse)).toEqual(baseCourse);
    baseCourse = '';
    expect(swapCourse(baseCourse)).toEqual(baseCourse);
  });
});
