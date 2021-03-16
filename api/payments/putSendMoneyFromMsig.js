import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { wallet } from '../../schemas';
import { Map } from 'immutable';
import { requestAsync } from '@digitalwing.co/redux-query-immutable';

/**
 *
 * @param id {String}
 * @param successCallback {Function}
 * @param body {Immutable.List}
 */
export default ({ id, successCallback, ...body }) => requestAsync({
  url: endpoints.getSendMoneyFromMsigUrl(id),
  queryKey: endpoints.getSendMoneyFromMsigUrl(),
  body,
  meta: {
    authToken: true,
    errorKey: 'PUT_SEND_MONEY',
    successCallback,
  },
  transform: response => normalize(response.data, wallet.schema).entities,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    wallet: (prevEntities = Map(), nextEntities) => prevEntities.merge(nextEntities),
  },
});
