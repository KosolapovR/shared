import store from '../configureStore';

/**
 * Функция для определения фиатных валют
 *
 * @returns {Boolean}
 * @param {string} alias валюты
 */
export default (alias) => {
  const fiatCurrenciesIds = store.getState().get('results').get('fiatCurrencies');
  const fiatCurrenciesById = store.getState().get('entities').get('fiatCurrency');

  return fiatCurrenciesIds.some(key => fiatCurrenciesById.get(key).get('alias') === alias.toLowerCase());
};
