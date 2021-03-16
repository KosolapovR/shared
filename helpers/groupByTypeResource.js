import getResourceInfoByOptions from './getResourceInfoByOptions';

/**
 * Функция для групировки по типу ресурса
 *
 * @param list {Array} Immutable данные
 * @param groupKey {String} Ключ группы значений
 * @param groupName {String} Имя группы елементов
 * @param typeResource {String} Тип ресурса
 * @param searchKey {String} поле по которому ищем
 * @returns {Array} immutable данные которые представлены в парах ключ-значение.
 */
export default (list, {
  groupKey,
  groupName,
  typeResource,
  searchKey = 'id',
}) => list
  .groupBy(item => item.get(groupKey))
  .map(group => getResourceInfoByOptions(null, {
    searchKey,
    typeResource,
    searchValue: group.first().get(groupKey),
  }).set(groupName, group));
