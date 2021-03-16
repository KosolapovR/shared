const numberWithSpace = (num) => {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
};

/**
 * Функция убирает в строке с числом/числе числа после точки, и нули
 *
 * @param number {String |Number} строка/число, где нужно сделать преобразование
 * @param n {number} Число, до которого ( не влючая его) будем обрезать строку
 * @param isFormatting {Boolean} Значение, отвечающее за форматирование числа
 * @returns {string} Результат преобразования
 */
export default (number, n, isFormatting = true, useParseFloat = false) => {
  // если число равно Infinity, 0, null, NuN, undefined, '', сразу возвращаем ноль
  if (!number || number === Infinity) {
    return useParseFloat ? 0 : '0';
  }

  // если число является целочисленным, возвращаем его без изминенний
  if (Number.isInteger(+number)) {
    if (isFormatting) {
      return numberWithSpace(parseFloat(number).toString());
    }
    return useParseFloat ? parseFloat(number) : number.toString();
  }

  let numericString = number;
  // для чисел с экспонентой делаем toFixed
  if (typeof number !== 'string') {
    numericString = (+number).toFixed(14);
  }

  const arrayNumber = numericString.split('.');
  let result = `${arrayNumber[0]}.${arrayNumber[1] ? arrayNumber[1].substring(0, n) : 0}`;

  // убираем лишние нули после запятой
  result = result.replace(/0*$/, '');
  if (result[result.length - 1] === '.') {
    result = result.slice(0, -1);
  }

  if (isFormatting && result !== '0') {
    result = numberWithSpace(result);
    if (result.match(/\./)) {
      result = result.replace(/\.?0+$/, '');
    }
  }

  return useParseFloat ? parseFloat(result) : result;
};
