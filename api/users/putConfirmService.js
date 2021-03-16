import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import { user } from '../../schemas';
import endpoints from '../endpoints';

/**
 * @typedef ServiceConfirmBody
 * @property {string} passcode
 * @property {phone | telegram | messenger} type
 *
 * @param requestBody
 * @param successCallback {Function}
 * @param errorCallback {Function}
 */
export default ({
  requestBody: {
    passcode,
    connect2fa = false,
    type,
  },
  successCallback,
  errorCallback,
}) => requestAsync({
  url: endpoints.putConfirmServiceUrl({ type }),
  queryKey: `post${endpoints.putConfirmServiceUrl({})}`,
  transform: ({ data }) => normalize(data, user.schema).entities,
  body: { passcode, connect2fa },
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
    user: (oldUser, newUser) => oldUser.merge(newUser),
  },
});
