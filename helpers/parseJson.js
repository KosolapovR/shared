/**
 * Функция для розбирание строки с преобразованием получаемого в процессе разбора значения
 *
 * @param string Разбираемая строка JSON
 * @returns {null|any} Возвращает преобразованый Json или null
 */
export default (string) => {
  if (!string) {
    return null;
  }

  try {
    return JSON.parse(string);
  } catch (e) {
    return null;
  }
};
