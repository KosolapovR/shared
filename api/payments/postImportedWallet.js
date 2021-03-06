import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { wallet } from '../../schemas';
import { Map, List } from 'immutable';
import { transformed } from '../../helpers';

/**
 *
 * @typedef PostImportedWallet
 * @property currencyAlias {String}
 * @property address {String}
 * @property formValues {Array}
 *
 * @param {PostImportedWallet} requestBody
 * @param successCallback {Function}
 */
export default ({ requestBody, successCallback }) => requestAsync({
  url: endpoints.getImportedWalletUrl(),
  queryKey: endpoints.getImportedWalletUrl(),
  transform: response =>
    normalize(transformed.getCryptoWallet(response.data), wallet.schema).entities,
  transformResult: (response) => {
    const { result } = normalize(response.data, wallet.schema);
    return ({
      wallets: result,
      walletsByAlias: result,
    });
  },
  body: requestBody,
  meta: {
    authToken: true,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
  update: {
    wallet: (prevWallet = Map(), nextWallet) => prevWallet.mergeDeep(nextWallet),
  },
  updateResult: {
    wallets: (prevResult = List(), result) => {
      if (prevResult.size) {
        return prevResult.push(result);
      }
      return prevResult;
    },
    walletsByAlias: (prevResult = List(), result) => prevResult.push(result),
  },
});
