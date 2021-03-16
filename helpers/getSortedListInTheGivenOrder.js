import { List } from 'immutable';

/**
 * Функция для сортировки массива по заданому порядку
 *
 * @param items {Immutable.List} Исходный массив
 * @param order {array || Immutable.List} Порядок для сортировки
 * @returns {*} Возвращает отсортированный массив
 */

export default (items, order) => {
  let sourceItems = items;

  // сортируем по приоритету, заданому в первичных настройках
  let sortedResult = List();

  order.forEach((alias) => {
    const foundIndex = sourceItems.findIndex(item => item.get('alias') === alias.toLowerCase());
    if (foundIndex !== -1) {
      sortedResult = sortedResult.push(sourceItems.get(foundIndex));
      sourceItems = sourceItems.delete(foundIndex);
    }
  });

  // если остались не отсортированные элементы добавляем их в конец
  if (sourceItems.size) {
    return sortedResult.merge(sourceItems);
  }

  return sortedResult;
};
