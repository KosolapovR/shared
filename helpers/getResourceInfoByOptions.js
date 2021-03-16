import Immutable from 'immutable';
import store from '../configureStore';

/**
 * Функция для получения выбраных, по параметрам ресурсов
 *
 * @param _resources {Object} Все ресурсы
 * @param searchKey {String} Берем значение по ключу
 * @param searchValue {String} Значение по которому ищем ресурс
 * @param typeResource {String} В каком ресурсе ищем (не обязательный параметр)
 * @returns {Array} Immutable данные которые представлены в парах ключ-значение.
 */
export default (_resources, { searchKey, searchValue, typeResource }) => {
  // достаем платежные ресурсы с редакса
  const results = store.getState().get('results');
  const resources = _resources || {
    cryptocurrencies: results.get('cryptocurrencies'),
    banks: results.get('banks'),
    paymentSystems: results.get('paymentSystems'),
  };

  let chosenResource;
  if (typeResource) {
    chosenResource = resources[typeResource].find(I => I.get(searchKey) === searchValue);
  } else {
    Object.keys(resources).some((key) => {
      chosenResource = resources[key].find(I => I.get(searchKey) === searchValue);
      return chosenResource;
    });
  }

  return chosenResource || Immutable.Map();
};
