/* eslint-disable max-len */
import { getResourceInfoByOptions } from '../helpers';
import _ from 'lodash';
import { DEAL_STATUSES } from '../consts';

/**
 * Функция которая нужна для трансформации массива данных с предложениями
 *
 * @param offers {Array} Массив который мы преобразуем
 * @returns {Array} Новый, преобразованый массив
 */
export const getTransformedOffers = offers => offers.reduce((acc, item) => {
  const currencySellInfo = getResourceInfoByOptions(
    null, { searchKey: 'alias', searchValue: item.sellWalletAlias.toLowerCase() },
  );
  const currencyBuyInfo = getResourceInfoByOptions(
    null, { searchKey: 'alias', searchValue: item.buyWalletAlias.toLowerCase() },
  );

  let sellCurrencyFullName;
  let sellCurrencyDigits;
  if (currencySellInfo.size) {
    sellCurrencyFullName = currencySellInfo.get('fullName');
    sellCurrencyDigits = currencySellInfo.get('digits');
  }

  let walletReceiveFullName;
  let walletReceiveDigits;
  if (currencyBuyInfo.size) {
    walletReceiveFullName = currencyBuyInfo.get('fullName');
    walletReceiveDigits = currencyBuyInfo.get('digits');
  }

  acc.push({
    ...item,
    sellCurrencyFullName: sellCurrencyFullName || item.sellWalletAlias.charAt(0) + item.sellWalletAlias.slice(1).toLowerCase(),
    walletReceiveFullName: walletReceiveFullName || item.buyWalletAlias.charAt(0) + item.buyWalletAlias.slice(1).toLowerCase(),

    sellCurrencyDigits: sellCurrencyDigits || 2,
    walletReceiveDigits: walletReceiveDigits || 2,
  });
  return acc;
}, []);
/**
 * Функция которая нужна для трансформации массива данных с одним предложением
 *
 * @param offer {Array} Массив который мы преобразуем
 * @returns {Object} Преобразованый обьект
 */
export const getTransformedOffer = (offer) => {
  const currencySellInfo = getResourceInfoByOptions(
    null, { searchKey: 'alias', searchValue: offer.sellWalletAlias.toLowerCase() },
  );
  const currencyBuyInfo = getResourceInfoByOptions(
    null, { searchKey: 'alias', searchValue: offer.buyWalletAlias.toLowerCase() },
  );

  return ({
    ...offer,
    sellCurrencyFullName: _.get(currencySellInfo, 'size')
      ? currencySellInfo.get('fullName')
      : offer.sellWalletAlias.charAt(0) + offer.sellWalletAlias.slice(1).toLowerCase(),
    walletReceiveFullName: _.get(currencyBuyInfo, 'size')
      ? currencyBuyInfo.get('fullName')
      : offer.buyWalletAlias.charAt(0) + offer.buyWalletAlias.slice(1).toLowerCase(),
  });
};
/**
 * Функция используется для преобразования массива со сделками
 *
 * @param deals {Array} Массив со сделками
 * @param type {String} Тип сделки
 * @returns {Array} Возвращает новый массив со сделками или []
 */
export const getTransformedDeals = (deals, type) => {
  const activeStatuses = [DEAL_STATUSES.DISPUTE_START, DEAL_STATUSES.MINING,
    DEAL_STATUSES.WAITING_PARTNER_CONFIRM, DEAL_STATUSES.WAITING_CONFIRM, DEAL_STATUSES.CREATED];
  const newStatuses = [DEAL_STATUSES.PRE_INITIALIZED, DEAL_STATUSES.INITIALIZED_MINING,
    DEAL_STATUSES.INITIALIZED];
  const closedStatuses = [DEAL_STATUSES.OUTDATED, DEAL_STATUSES.REJECTED, DEAL_STATUSES.CANCELED,
    DEAL_STATUSES.UNRATED, DEAL_STATUSES.DISPUTE_END, DEAL_STATUSES.RATED];
  switch (type) {
    case 'activeDeals':
      return deals.filter(deal => activeStatuses.includes(deal.sellerStatus));
    case 'newDeals':
      return deals.filter(deal => newStatuses.includes(deal.sellerStatus));
    case 'closedDeals':
      return deals.filter(deal => closedStatuses.includes(deal.sellerStatus));

    default: return [];
  }
};
