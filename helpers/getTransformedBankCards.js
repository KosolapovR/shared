import store from '../configureStore';
import getResourceInfoByOptions from './getResourceInfoByOptions';

/**
 * Функция которая берет дополнительную инфу о картах со store
 *
 * @param bankCards {Array} Информация о банковской карте
 * @returns {Array} Возвращается новый массив с данными которые мы взяли со store
 */
export const getTransformedBankCards = (bankCards) => {
  const banks = store.getState().get('results').get('banks');
  return bankCards.map(bankCard => ({
    alias: getResourceInfoByOptions(({ banks }), { searchKey: 'id', searchValue: bankCard.bankId, typeResource: 'banks' }).get('alias'),
    ...bankCard,
  }));
};
/**
 * Функция которая берет дополнительную инфу о карте со store
 *
 * @param bankCard {Object} Информация о банковской карте
 * @returns {Object} Возвращается новый обьект с данными которые мы взяли со store
 */
export const getTransformedBankCard = (bankCard) => {
  const banks = store.getState().get('results').get('banks');
  return ({
    alias: getResourceInfoByOptions(({ banks }), { searchKey: 'id', searchValue: bankCard.bankId, typeResource: 'banks' }).get('alias'),
    ...bankCard,
  });
};
