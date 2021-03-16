import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { wallet } from '../../schemas';
import { Map } from 'immutable';
import { transformed } from '../../helpers';

/**
 *
 * @param id {String}
 * @param resultKey {String}
 */
export default ({ id, resultKey = 'wallet' }) => requestAsync({
  url: endpoints.getWalletByIdUrl(id),
  queryKey: `${resultKey !== 'wallet' ? resultKey : ''}${endpoints.getWalletByIdUrl()}`,
  transform: response =>
    normalize(
      transformed.getCryptoWallet(response.data),
      wallet.schema,
    ).entities,
  transformResult: response => ({
    [resultKey]: normalize(response.data, wallet.schema).result,
  }),
  meta: {
    authToken: true,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    wallet: (prevWallet = Map(), nextWallet) => prevWallet.mergeDeep(nextWallet),
  },
  updateResult: {
    [resultKey]: (_, result) => result,
  },
});
