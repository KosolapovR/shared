/* eslint-disable max-len */
// const { cropNumberToN, getThousandthNormalize, round } = require('../helpers');

const required = (value, _, { t }) => {
  if (typeof value === 'number') {
    return value;
  }
  return (value && value.trim() ? undefined : 'Обязательное поле');
};

const minLength = min => (value, _, { t }) => {
  if (!value) {
    return `Не меньше ${min}`;
  }
  return value.trim().length < min ? `Не меньше ${min} символов` : undefined;
};

const maxLength = max => (value, _, { t }) => {
  if (!value) {
    return undefined;
  }
  return value.trim().length > max ? `Не большe ${max} символов` : undefined;
};

const email = (value, _, { t }) => (
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        // ? t('AUTH.PAGE_REGISTRATION.UI_REGISTRATION.INCORRECT_MAIL')
        ? 'Некорректный email'
        : undefined
);

const password = (value, _, { t }) => (
    value && !/^[A-Za-z0-9!"#$%&'()*+,\-/:;<=>?@\][\\^`{|}~_.]{6,30}$/i.test(value)
        // ? t('AUTH.PAGE_REGISTRATION.UI_REGISTRATION.INCORRECT_SYMBOL_IN_PASSWORD')
        ? 'Недопустимый символ в пароле'
        : undefined
);

// const agreeRequired = (value, _, { t }) => (value ? undefined : t('AUTH.PAGE_REGISTRATION.UI_REGISTRATION.REQUIRED_FIELD'));
const agreeRequired = (value, _, { t }) => (value ? undefined : 'Обязательное поле');


export {
  required,
  maxLength,
  minLength,
  email,
  password,
  agreeRequired,
}
