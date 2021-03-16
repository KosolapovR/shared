/**
 * Функция которая преобразует код цвета в систему RGBA
 *
 * @param hex {String} Цвет который нужно преобразовать
 * @param alpha {Number} Параметр прозрачности елемента
 * @returns {String} Возвращает цвет в ситеме RGBA
 */
export default (hex, alpha = 1) => {
  if (!hex) {
    return 'rgb(0,0,0)';
  }

  const trimmedHex = hex.replace('#', '');
  const r = parseInt(
    trimmedHex.length === 3
      ? trimmedHex.slice(0, 1).repeat(2)
      : trimmedHex.slice(0, 2),
    16,
  );
  const g = parseInt(
    trimmedHex.length === 3
      ? trimmedHex.slice(1, 2).repeat(2)
      : trimmedHex.slice(2, 4),
    16,
  );
  const b = parseInt(
    trimmedHex.length === 3
      ? trimmedHex.slice(2, 3).repeat(2)
      : trimmedHex.slice(4, 6),
    16,
  );

  if (alpha || alpha === 0) {
    return `rgba(${r},${g},${b},${alpha})`;
  }
  return `rgb(${r},${g},${b})`;
};
