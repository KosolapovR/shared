import getResourceInfoByOptions from './getResourceInfoByOptions';
import { FIAT_DIGITS } from '../consts';

/**
 * Функция для получения определенного количества знаков после запятой по alias ресурса
 *
 * @param alias {String} Искомое значение
 * @returns {Number} количества знаков после запятой по дефолту FIAT_DIGITS
 */
export default (alias) => {
  let digits = FIAT_DIGITS;

  if (alias) {
    const currencyInfo = getResourceInfoByOptions(
      null, {
        searchKey: 'alias',
        searchValue: alias.toLowerCase(),
        typeResource: 'cryptocurrencies',
      },
    );

    if (currencyInfo.size) {
      digits = currencyInfo.get('digits');
    }
  }

  return digits;
};
