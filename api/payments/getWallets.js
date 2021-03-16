import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { wallet } from '../../schemas';
import { Map } from 'immutable';
import { transformed } from '../../helpers';

/**
 * @typedef GetWallets
 * @property type {String}
 * @property currencyAlias {String}
 *
 * @param {GetWallets} queryParams
 * @param successCallback {Function}
 * @param errorCallback {Function}
 * @param resultKey {String}
 */
export default ({
  successCallback,
  errorCallback,
  queryParams,
  resultKey = 'wallets',
  notParseTransaction = false,
} = {}) => requestAsync({
  url: endpoints.getWalletsUrl(queryParams),
  queryKey: resultKey !== 'ethWallet' ? endpoints.getWalletsUrl() : `ethWallet${endpoints.getWalletsUrl()}`,
  transform: response => normalize(
    transformed.getCryptoWallets(response.data),
    wallet.schemasArray,
  ).entities,
  transformResult: response => ({
    [resultKey]: normalize(response.data, wallet.schemasArray).result,
    metaWallets: response.meta,
  }),
  meta: {
    authToken: true,
    withoutErrorToast: true,
    successCallback,
    errorCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    wallet: (prevWallet = Map(), nextWallet) => prevWallet.merge(nextWallet),
    ...(notParseTransaction ? {} : {
      transaction: (prevEntities = Map(), nextEntities) => prevEntities.merge(nextEntities),
    }),
  },
  updateResult: {
    [resultKey]: (_, result) => result,
    metaWallets: (_, result) => result,
  },
});
