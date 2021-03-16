import fixedToN from './fixedToN';

/**
 * Функция для форматирования валюты
 *
 * @param number {Number} Стоимость валюты
 * @param separate {String} Значение которое заменит искомое значение в методе replace
 * @param fixed {String} Колличество знаков до которого нужно округлить/
 *    Количество цифр после десятичной запятой
 * @param isCeil {Boolean} Параметр , который отвечает за то,
 *    будет ли округлено число до ближайшего большего целого
 * @returns {String} Возвращается отформатированная строка
 */
export default (number, {
  separate = ' ',
  fixed = 2,
  isCeil = true,
} = {}) =>
  (+fixedToN(number, fixed, isCeil))
    .toFixed(fixed)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${separate}`);
