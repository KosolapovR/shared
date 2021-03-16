import { email } from '../index';

const errorText = 'someErrorText';

it('email validation with russian words', () => {
  expect(email('фвыasd@mail.ru', '', { t: () => errorText })).toEqual(errorText);
});

it('email validation without @', () => {
  expect(email('asdmail.ru', '', { t: () => errorText })).toEqual(errorText);
});

it('email validation correct', () => {
  expect(email('test@mail.ru', '', { t: () => errorText })).toEqual(undefined);
});

it('email validation without region', () => {
  expect(email('test@mail', '', { t: () => errorText })).toEqual(errorText);
});
