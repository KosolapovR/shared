import round from './round';

/**
 * Функция, которая форматирует число
 *
 * @param num {Number} Число которое нужно отформатировать
 * @param digits {Number} Количество цифр после десятичной запятой
 * @returns {string|number} Возвращает отформатированное значение
 */
export default (num, digits = 2) => {
  if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(1).replace(/\.0$/, '')}G`;
  }
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1).replace(/\.0$/, '')}M`;
  }
  if (num >= 100000) {
    return `${(num / 1000).toFixed(1).replace(/\.0$/, '')}K`;
  }
  return round(num, digits);
};
