import { password } from '../index';

const errorText = 'someErrorText';

it('password validation with russian words', () => {
  expect(password('фвы', '', { t: () => errorText })).toEqual(errorText);
});

it('password validation with space', () => {
  expect(password('pass word', '', { t: () => errorText })).toEqual(errorText);
});

it('password validation less then 6 symbols', () => {
  expect(password('asd23', '', { t: () => errorText })).toEqual(errorText);
});

it('password validation more then 30 symbols', () => {
  expect(password('1234567890123456789012345678901', '', { t: () => errorText })).toEqual(errorText);
});

it('password validation accept', () => {
  expect(password('password', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation 6 symbol', () => {
  expect(password('123456', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation 30 symbols', () => {
  expect(password('123456789012345678901234567890', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with !', () => {
  expect(password('password!', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with "', () => {
  expect(password('password"', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with #', () => {
  expect(password('password#', '', { t: () => errorText })).toEqual(undefined);
});
it('password validation with $', () => {
  expect(password('password$', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with %', () => {
  expect(password('password%', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with !&', () => {
  expect(password('password&', '', { t: () => errorText })).toEqual(undefined);
});
it('password validation with \'', () => {
  expect(password('password\'', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with (', () => {
  expect(password('password(', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with )', () => {
  expect(password('password)', '', { t: () => errorText })).toEqual(undefined);
});
it('password validation with *', () => {
  expect(password('password*', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with +', () => {
  expect(password('password+', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with ,', () => {
  expect(password('password,', '', { t: () => errorText })).toEqual(undefined);
});
it('password validation with -', () => {
  expect(password('password-', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with .', () => {
  expect(password('password.', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with /', () => {
  expect(password('password/', '', { t: () => errorText })).toEqual(undefined);
});
it('password validation with :', () => {
  expect(password('password:', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with ;', () => {
  expect(password('password;', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with <', () => {
  expect(password('password<', '', { t: () => errorText })).toEqual(undefined);
});
it('password validation with =', () => {
  expect(password('password=', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with >', () => {
  expect(password('password>', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with ?', () => {
  expect(password('password?', '', { t: () => errorText })).toEqual(undefined);
});
it('password validation with @', () => {
  expect(password('password@', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with [', () => {
  expect(password('password[', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with \\', () => {
  expect(password('password\\', '', { t: () => errorText })).toEqual(undefined);
});
it('password validation with ]', () => {
  expect(password('password]', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with ^', () => {
  expect(password('password^', '', { t: () => errorText })).toEqual(undefined);
});
it('password validation with _', () => {
  expect(password('password_', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with `', () => {
  expect(password('password`', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with {', () => {
  expect(password('password{', '', { t: () => errorText })).toEqual(undefined);
});
it('password validation with }', () => {
  expect(password('password}', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with |', () => {
  expect(password('password|', '', { t: () => errorText })).toEqual(undefined);
});

it('password validation with ~', () => {
  expect(password('password~', '', { t: () => errorText })).toEqual(undefined);
});
