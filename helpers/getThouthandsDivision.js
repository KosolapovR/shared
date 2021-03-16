/**
 * Функция принимающая значение и форматирующая его целую часть по пробелу
 *
 * @param value {Number| String} Строка которая будет отформатирована
 * @returns {string} Отформатированная строка или value
 */
const getThousandthFormat = (value) => {
    if (value && value.toString().trim()) {
        const parts = value.toString().split('.');
        parts[0] = parts[0].replace(/ /g, '')
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    } if (value === 0) {
        return '0';
    }

    return '';
};
/**
 * Функция которая вырезает пробелы со строки
 *
 * @param value {String} Строка с которой будут вырезаны пробелы
 * @returns {string} Строка без пробелов
 */
const getThousandthNormalize = (value = '') => {
    if (typeof value === 'number') return value;

    if (value.includes(' ')) {
        return value.replace(/ /g, '');
    }
    return value;
};

export {
    getThousandthFormat,
    getThousandthNormalize,
}
