/**
 * Конвертирует валюты по курсу так чтобы каждая из валют не была меньше минимального значения
 *
 * @param {object} options
 * @param {number} options.course - Курс валюты
 * @param {number} options.minValue - минимальное значение для двух валют
 *
 * @return {object} { from, to }
 */
export default ({
  course,
  minValue = 1,
}) => {
  const result = { from: 0, to: 0 };

  if (!course) {
    return result;
  }

  if (course < minValue) {
    result.from = minValue * (minValue / course);
    result.to = minValue;
  } else {
    result.from = minValue;
    result.to = minValue * course;
  }

  return result;
};
