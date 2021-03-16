/**
 * Паттерны удобно тестировать на https://www.regextester.com/
 * Там можно наводиться курсором на части паттерна и смотреть, что они делают
 */

/**
 * Паттерн для десятичных чисел
 *
 * @param params {Object} Объект с параметрами
 * @param params.integerLimit {Object} Ограничение на количество знаков до запятой
 * @param params.decimalLimit {Object} Ограничение на количество знаков до запятой
 * @param params.withMinus {Boolean} Можно ли вводить отрицательные значения
 * @param params.withSpaces {Boolean} Можно ли вводить пробелы
 *
 * @return {String} Возвращает паттерн для инпута
 */
export const decimal = ({
  integerLimit = '',
  decimalLimit = '',
  withMinus = false,
  withSpaces = true,
} = {}) => `^${withMinus ? '-?' : ''}(?:0|[1-9][${withSpaces ? ' ' : ''}0-9]{0,${integerLimit}})?([?:\\.]|$)([${withSpaces ? ' ' : ''}0-9]{0,${decimalLimit}})?$`;

/**
 * Паттерн для чисел/английских букв, без пробелов. Подходит для валидации адресов кошельков
 *
 * @return {String} Возвращает паттерн для инпута
 */
export const lettersOrNumbers = () => '^[A-Za-z\\d:]{1,}$';

/**
 * Паттерн для букв. Подходит для валидации названий/заголовков.
 *
 * @param params {Object} Объект с параметрами
 * @param params.withRussian {Boolean} Можно ли вводить русские буквы
 * @param params.withNumbers {Boolean} Можно ли вводить цифры
 * @param params.withSpaces {Boolean} Можно ли вводить пробелы
 *
 * @return {String} Возвращает паттерн для инпута
 */
export const letters = ({
  withRussian = true,
  withNumbers = false,
  withSpaces = true,
} = {}) => `^[A-Za-z${withRussian ? 'А-Яа-яЁё' : ''}${withNumbers ? '\\d' : ''}${withSpaces ? '\\s' : ''}]{1,}$`;

/**
 * Паттерн для валидации любого (почти) текста
 *
 * @param params {Object} Объект с параметрами
 * @param params.withRussian {Boolean} Можно ли вводить русские буквы
 * @param params.withSpaces {Boolean} Можно ли вводить пробелы
 *
 * @return {String} Возвращает паттерн для инпута
 */
export const text = ({
  withRussian = true,
  withSpaces = false,
} = {}) => `^[A-Za-z${withRussian ? 'А-Яа-яЁё' : ''}\\.,\\/#!$%\\^&\\*;:{}#№@"=+'\\?\\-_~\\(\\)\\d${withSpaces ? '\\s' : ''}]{1,}$`;

/**
 * Паттерн, через который пройдет любая строка
 *
 * @return {String} Возвращает паттерн для инпута
 */
export const any = () => '^.*$';

/**
 * Паттерн, через который пройдет любая строка
 *
 * @param params {Object} Объект с параметрами
 * @param params.maxLength {Number} Можно ли вводить русские буквы
 * @param params.withPlus {Boolean} Можно ли вводить плюс в начале
 * @param params.withSpaces {Boolean} Можно ли вводить пробелы
 *
 * @return {String} Возвращает паттерн для инпута
 */
export const numbers = ({
  maxLength = 0,
  withPlus = false,
  withSpaces = false,
} = {}) => `^${withPlus ? '+?' : ''}[${withSpaces ? '\\s' : ''}\\d]{0,${maxLength || ''}}$`;
// export const email =
