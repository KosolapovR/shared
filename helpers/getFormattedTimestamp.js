import moment from 'moment';

/**
 * Проверяет валидность даты и по опциям возвращает форматированное время
 *
 * @param {String|Number} value - время
 *
 * @param {Object}  [options]
 * @param {Boolean} [options.isDuration] - если true вернёт продолжительность в человеческом формате
 * @param {String}  [options.format]     - правила вывода даты
 *
 * @returns {String|false} - если валидно - форматированное время || false
 */
export default (value, {
  isDuration = false,
  format = 'DD.MM.YYYY',
} = {}) => {
  const isValid = value && value !== '0001-01-01T00:00:00Z';

  if (!isValid) {
    return false;
  }
  if (isDuration) {
    return moment.duration(value).humanize();
  }

  return moment(value).format(format);
};
