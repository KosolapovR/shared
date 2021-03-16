import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { Map } from 'immutable';
import { user } from '../../schemas';
import { normalize } from 'normalizr';
import endpoints from '../endpoints';

/**
 * @typedef AddUserExchange
 * @property exchange {Null}
 *
 * @param {AddUserExchange} requestBody
 * @param successCallback {Function}
 * @param errorCallback {Function}
 */
export default ({
  requestBody: {
    exchange,
  },
  successCallback,
  errorCallback,
}) => requestAsync({
  url: endpoints.putUserExchangeUrl({ exchange }),
  queryKey: endpoints.putUserExchangeUrl({}),
  transform: ({ data }) => normalize(data, user.schema).entities,
  meta: {
    authToken: true,
    successCallback,
    errorCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    user: (prevUser = Map(), nextUser) =>
      prevUser.merge(nextUser),
  },
});
