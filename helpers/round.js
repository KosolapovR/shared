function numberWithSpace(num) {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return parts.join('.');
}

// const numberOfDecimalPlaces = num =>
// ((num.toString().includes('.')) ? (num.toString().split('.').pop().length) : 0);

const numberRound = (num, decimalsCount, isFormatting, useParseFloat) => {
  let number = num;
  // if (numberOfDecimalPlaces(num) > 10) {
  //   number = +num.toString().substring(0, num.toString().indexOf('.') + 11);
  // }
  number = (Math.round(number * (10 ** decimalsCount)) / (10 ** decimalsCount))
    .toFixed(decimalsCount);

  if (isFormatting && number !== 0) {
    number = numberWithSpace(number);
    if (number.match(/\./)) {
      number = number.replace(/\.?0+$/, '');
    }
  } else if (useParseFloat) {
    number = parseFloat(number);
  }

  return number;
};
/**
 * Функция, которая сокращает число до указанного количества знаков после запятой
 *
 * @param {any} num - Число, которое необходимо сократить
 * @param {Number} decimalsCount - Число знаков после запятой, до которого необходимо сократить
 * @param {Boolean} isFormatting Значение, отвечающее за форматирование числа
 * @param {Boolean} useParseFloat Использовать ли parseFloat (с ним будет отображаться экспонента)
 *
 * @returns {Number | String} Число, сокращенное до указанного количества знаков после запятой
 */

export default (num, decimalsCount = 2, isFormatting = true, useParseFloat = true) => {
  if (typeof num === 'number') {
    return numberRound(num, decimalsCount, isFormatting, useParseFloat);
  }

  if (typeof num === 'string') {
    const stringAfterCoercion = +num;

    if (Number.isNaN(stringAfterCoercion)) {
      return 0;
    }

    return numberRound(num, decimalsCount, isFormatting, useParseFloat);
  }

  return 0;
};
