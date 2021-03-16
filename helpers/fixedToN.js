/**
 * Функция для окргления чисел
 *
 * @param {Number} number Стоимость валюты
 * @param {Number} n Колличество знаков до которого нужно округлить
 * @param {Boolean} isFloor Параметр , который отвечает за то,
 * будем ли мы округлять до ближайшего большого целого
 * @returns {string} Возвращается отформатированная строка
 */
export default (number, n, isFloor) => {
  if (isFloor) {
    return (Math.ceil(number * (10 ** n)) / (10 ** n)).toString();
  }

  let result = (Math.round(number * (10 ** n)) / (10 ** n)).toFixed(n);
  if (!+result) {
    return '0';
  }
  result = result.replace(/0*$/, '');
  if (result[result.length - 1] === '.') {
    result = result.slice(0, -1);
  }
  return result;
};
