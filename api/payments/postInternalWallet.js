import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { wallet } from '../../schemas';
import { Map, List } from 'immutable';
import { transformed } from '../../helpers';

/**
 *
 * @param requestBody {Object}
 */
export default requestBody => requestAsync({
  url: endpoints.getInternalWalletUrl(),
  queryKey: endpoints.getInternalWalletUrl(),
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
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
  update: {
    wallet: (prevEntities = Map(), nextEntities) => prevEntities.mergeDeep(nextEntities),
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
