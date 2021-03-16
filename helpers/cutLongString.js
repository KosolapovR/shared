/**
 * Функция которая обрезает строку, по заданой максимальной длине
 *
 * @param string {String}Строка которую нужно обрезать
 * @param maxLength {Number} Максимальная длина строки
 * @returns {string} Возвращает строку
 */
export default (string = '', maxLength = 30) => {
  if (string && typeof string === 'string') {
    if (string.length > maxLength) {
      return `${string.substr(0, maxLength - 3)}...`;
    }
    return string;
  }

  return '';
};
