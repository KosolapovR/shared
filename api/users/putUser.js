import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import endpoints from '../../api/endpoints';
import { user } from '../../schemas';
import { Map } from 'immutable';

/**
 * @typedef AddedUser
 * @property {string} username
 * @property {Object} settings
 *
 * @param {AddedUser} requestBody
 * @param successCallback {Function}
 */
export default ({ requestBody, successCallback }) => requestAsync({
  url: endpoints.getUserUrl(),
  queryKey: `put${endpoints.getUserUrl()}`,
  transform: response => normalize(response.data, user.schema).entities,
  body: requestBody,
  meta: {
    authToken: true,
    successCallback,
  },
  force: true,
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
