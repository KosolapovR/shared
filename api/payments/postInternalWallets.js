import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { wallet } from '../../schemas';
import { Map } from 'immutable';
import { transformed } from '../../helpers';

/**
 *
 * @param successCallback {Function}
 * @param errorCallback {Function}
 */
export default ({ successCallback, errorCallback }) => requestAsync({
  url: endpoints.getInternalWalletAllUrl(),
  queryKey: endpoints.getInternalWalletAllUrl(),
  transform: response => normalize(
    transformed.getCryptoWallets(response.data),
    wallet.schemasArray,
  ).entities,
  transformResult: response => ({
    wallets: normalize(response.data, wallet.schemasArray).result,
  }),
  meta: {
    authToken: true,
    successCallback,
    errorCallback,
    errorKey: 'POST_INTERNAL_WALLETS_SUBSCRIBE',
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
    wallets: (_, result) => result,
  },
});
