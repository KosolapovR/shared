/**
 * Функция для получения кол-во знаков после запятой если значение меньше 0.001
 */
export default (number) => {
  let digits = 2;

  if (number && number < 0.01) {
    // конвертируем входящее значение в строку
    // и обрезаем целую часть с точкой
    const symbolArray = Array.from(number.toString().split('.')[1]);
    // ищем в массиве первый символ, который не равен 0
    const firstDigitIndex = symbolArray.indexOf(symbolArray.find(symbol => symbol !== '0'));

    // и возвращаем значение - индекс + 4
    // (+1 как компенсация индексации массива и +3 знака после него),
    // если последующий символ не повторяется
    // индекс +1, если следующий знак совпадает
    if (symbolArray[firstDigitIndex] !== symbolArray[firstDigitIndex + 1]) {
      digits = firstDigitIndex + 4;
    } else {
      digits = firstDigitIndex + 1;
    }
  }

  return digits;
};
