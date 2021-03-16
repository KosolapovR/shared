/**
 * Корректировка округления десятичных дробей.
 *
 * @param {Number}  number Число.
 * @param {Number} digits   Показатель степени (десятичный логарифм основания корректировки).
 * @returns {Number} Скорректированное значение.
 */
export default (number, digits) => {
    let exp = -digits;
    // Если степень не определена, либо равна нулю...
    if (typeof exp === 'undefined' || +exp === 0) {
        return Math.ceil(number);
    }
    let value = +number;
    exp = +exp;
    // Если значение не является числом, либо степень не является целым числом...
    if (Number.isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
    }
    // Сдвиг разрядов
    value = value.toString().split('e');
    value = Math.ceil(+(`${value[0] }e${ value[1] ? (+value[1] - exp) : -exp}`));
    // Обратный сдвиг
    value = value.toString().split('e');
    return +(`${value[0] }e${ value[1] ? (+value[1] + exp) : exp}`);
};
