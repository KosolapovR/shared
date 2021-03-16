import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { wallet } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @param body {Object}
 * @param id {String}
 * @param successCallback {Function}
 * @param errorCallback {Function}
 */
export default ({
  body,
  pinCode,
  id,
  successCallback,
  errorCallback,
}) => requestAsync({
  url: endpoints.getSendMoneyFromInternalUrl(id),
  queryKey: endpoints.getSendMoneyFromInternalUrl(),
  body,
  transform: response => normalize(response.data, wallet.schema).entities,
  meta: {
    authToken: true,
    errorKey: 'PUT_SEND_MONEY',
    pinCode,
    successCallback,
    errorCallback,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    wallet: (prevEntities = Map(), nextEntities) => prevEntities.merge(nextEntities),
    transaction: (prevEntities = Map(), nextEntities) => prevEntities.merge(nextEntities),
  },
});
