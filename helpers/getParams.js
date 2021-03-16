/**
* Функция, которая преобразует получаемый объект в строку вида url query params
*
* @param {Object} body - Объект с параметрами, которые нужно преобразовать в нужный вид
*
* @returns {String} Строка с query params
 */

export default (body) => {
  if (typeof body !== 'object') {
    return '';
  }

  return Object.keys(body)
    .reduce((accumulator, item) => {
      if (body[item] === undefined) {
        return accumulator;
      }

      return `${accumulator}${accumulator === '' ? '?' : '&'}${item}=${body[item]}`;
    }, '');
};
