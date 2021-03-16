import store from '../configureStore';

/**
 * Функция для получения лимитов крипто валюты к фиатной валюте
 *
 * @param {String} currencyAlias alias фиатной валюты
 * @returns {Object} Возвращается объект с максимальным и минимальным лимитом
 */
export default (currencyAlias) => {
  const entities = store.getState().get('entities');

  const chosenFiat = entities.get('fiatCurrency').find(I => I.get('alias') === currencyAlias.toLowerCase());

  const min = chosenFiat && chosenFiat.get('minLimit');
  const max = chosenFiat && chosenFiat.get('maxLimit');

  return { min, max };
};
