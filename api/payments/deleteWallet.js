import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { Map, List } from 'immutable';

/**
 *
 * @param id {String}
 */
export default ({ id }) => requestAsync({
  url: endpoints.getWalletByIdUrl(id),
  queryKey: `delete${endpoints.getWalletByIdUrl()}`,
  meta: {
    authToken: true,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'DELETE',
  },
  update: {
    wallet: (prevWallet = Map()) => prevWallet.delete(id),
  },
  updateResult: {
    wallets: (prevResult = List()) => prevResult.filter(item => item !== id),
    walletsByAlias: (prevResult = List()) => prevResult.filter(item => item !== id),
  },
});
