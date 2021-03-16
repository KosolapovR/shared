import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { wallet } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @param requestBody {Object}
 * @param id {String}
 */
export default ({ requestBody, id }) => requestAsync({
  url: endpoints.getWalletByIdUrl(id),
  queryKey: `put${endpoints.getWalletByIdUrl()}`,
  transform: response => normalize(response.data, wallet.schema).entities,
  body: {
    name: requestBody.get('name'),
  },
  meta: {
    authToken: true,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    wallet: (prevEntities = Map(), nextEntities) => prevEntities.mergeDeep(nextEntities),
  },
});
