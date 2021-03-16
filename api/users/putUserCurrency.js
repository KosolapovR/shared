import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import { Map } from 'immutable';
import { user } from '../../schemas';
import endpoints from '../endpoints';

/**
 * @typedef ChangeFiatCurrencyBody
 * @property {string} currency
 *
 * @param {ChangeFiatCurrencyBody} requestBody
 * @param successCallback {Function}
 * @param errorCallback {Function}
 */
export default ({ requestBody, successCallback, errorCallback }) => requestAsync({
  url: endpoints.putUserCurrencyUrl(),
  queryKey: endpoints.putUserCurrencyUrl(),
  transform: ({ data }) => normalize(data, user.schema).entities,
  body: requestBody,
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
    user: (prevUser = Map(), newUser) =>
      prevUser.merge(newUser),
  },
});
