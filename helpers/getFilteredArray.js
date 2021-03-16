import { isImmutable } from 'immutable';

/**
 * Функция для фильтрации массива
 *
 * @param arrayToFilter {Array} Массив для фильтрации
 * @param searchValue {String} Искомое значение
 * @param params {String || Array} Поле/Поля по которым происходит поиск
 * @returns {*} Возвращает отфильтрованый массив
 */
export default (arrayToFilter, searchValue, params) => {
  const searchValueLower = searchValue.trim().toLowerCase();

  if (searchValueLower) {
    let currentItem;
    if (typeof params === 'string') {
      return arrayToFilter.filter((item) => {
        currentItem = isImmutable(item)
          ? item.get(params)
          : item[params];
        return currentItem && currentItem
          .toLowerCase()
          .includes(searchValueLower);
      });
    }

    if (typeof params === 'object') {
      return arrayToFilter.filter(item =>
        params.some((param) => {
          currentItem = isImmutable(item)
            ? item.get(param)
            : item[param];

          return currentItem && currentItem
            .toLowerCase()
            .includes(searchValueLower);
        }));
    }
  }

  return arrayToFilter;
};
