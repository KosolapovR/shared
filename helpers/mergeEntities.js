import { Map } from 'immutable';
/**
 * Функция для обьеденения двух map`ов
 *
 * @param prevValue {Immutable} Map, который будем соединять
 * @param nextValue {Immutable} Map, который будем соединять
 *
 * * с помощью mergeWith пробегаемся по конфликтам, смотрим, если кофликтующие
 * свойства являются List`ами или простым типом данных - записываем новый лист,
 * если Map`ами - мерджим
 *
 * @returns {Immutable} Возвращает копию коллекции с объединенными оставшимися коллекциями
 */
export default (prevValue, nextValue) => prevValue.mergeWith((prev, next) => {
  if (Map.isMap(next)) {
    prev.merge(next);
  }

  return next;
}, nextValue);
