import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import { Map } from 'immutable';
import { user } from '../../schemas';
import endpoints from '../endpoints';

/**
 * @typedef UserPhoneAddBody
 * @property {phone | telegram | messenger} type
 * @property {string} phone
 *
 *
 * @param {UserPhoneAddBody} requestBody
 * @param successCallback {Function}
 * @param errorCallback {Function}
 */
export default ({ requestBody: { type, phone }, successCallback, errorCallback }) => requestAsync({
  url: endpoints.putConnectServiceUrl({ type }),
  queryKey: `put${endpoints.putConnectServiceUrl({})}`,
  body: { phone },
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
    user: (prevUser = Map(), newUser) =>
      prevUser.merge(newUser),
  },
});
