/**
 * Функция для отделения цифр банковской карты,
 * если меньше 16 символов то разделитель {replace}, а если больше то ' '.
 *
 * @param cardNumber {String} Строка с номером карты
 * @param replace {String} Разделитель строки
 * @returns {String} Пустая строка || Строка разбитая разделителем
 */
export default (cardNumber = '', replace = ' ') => {
  let newValue = '';
  if (cardNumber) {
    if (cardNumber.length <= 16) {
      newValue = cardNumber.replace(/\s+/g, '').replace(/(.{4})/g, `$1${replace}`).trim();
    } else if (cardNumber.length > 16) {
      newValue = cardNumber.replace(/\s+/g, '');
      newValue = `${newValue.substring(0, 8).trim()} ${newValue.substring(8, cardNumber.length).trim()}`;
    }
  }
  return newValue;
};
