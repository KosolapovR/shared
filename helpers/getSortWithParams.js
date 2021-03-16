import { isImmutable } from 'immutable';
import _ from 'lodash';

/**
 * Возвращает метод, который будет выполнять поиск значение и преобразования
 *
 * @param {(Immutable.List | Array)} entities - Immutable.List или Array из Object или Immutable.Map
 * @param {String} key - поле по которому будет сортироваться entities
 *
 * @param {Object} options - настройки для преобразования значения
 * @param {('string'|'number')} [options.type] - приведение к типу
 * @param {Object} [options.ignoreCase] - учитывать или нет case (только если type = string)
 *
 * @returns {Function}
 */
const getMethodForGetValueByKey = (entities, key, { type, ignoreCase = true } = {}) => {
  const first = isImmutable(entities) ? entities.first() : entities[0];

  let toType;
  switch (type) {
    case 'string':
      toType = ignoreCase
        ? val => String(val).toLowerCase()
        : String;
      break;
    case 'number':
      toType = Number;
      break;
    default: toType = val => val;
  }

  return isImmutable(first)
    ? elem => toType(elem.getIn(key.split('.')))
    : elem => toType(_.get(elem, key));
};

/**
 * Возвращает метод в котором определён порядок сортировки и способ извелечения значений
 *
 * @param {Function} getValue - функция которая будет возвращать значение для сравнения
 * @param {(-1|1)} [direct] - направление сортировки
 *
 * @returns {Function}
 */
const getStrategySort = (getValue, direct = -1) => (a, b) => {
  const firstValue = getValue(a);
  const secondValue = getValue(b);

  if (firstValue > secondValue) {
    return direct;
  }
  if (firstValue < secondValue) {
    return -direct;
  }

  return 0;
};

/**
 *
 * Принимает immutable object или Array и сортироует его в соответствии с настройками
 *
 * @param {(Immutable.List | Array)} entities - Immutable.List или Array из Object или Immutable.Map
 *
 * @param {Object} options опции для настройки
 * @param {String} options.key - ключ в объекте для сортировки,
 * вложенность поддерживается через точку
 * @param {('string'|'number')} [options.type] - приведение значения к указанному типу при сравнении
 * @param {Boolean} [options.ignoreCase] - учитывать или нет case (только если type = string)
 * @param {Number} [options.direct] - направление сортировки,
 * если положительное то ASC(1),
 * если отрицательое то DESC(-1)
 *
 * @returns {entities} отсортированная копия entities
 */
export default (entities, {
  key,
  type,
  ignoreCase,
  direct,
}) => {
  if (!(entities.length || entities.size)) {
    return entities;
  }

  const res = isImmutable(entities) ? entities : [...entities];
  const methodGetValueByKey = getMethodForGetValueByKey(entities, key, { type, ignoreCase });
  const strategySort = getStrategySort(methodGetValueByKey, direct);

  return res.sort(strategySort);
};
