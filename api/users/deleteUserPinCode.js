import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import { user } from '../../schemas';
import { Map } from 'immutable';
import endpoints from '../endpoints';

/**
 * @typedef SetPinCodeBody
 * @property {number} pin - current pin code
 * @property {string} password
 *
 * @param {SetPinCodeBody} requestBody
 * @param successCallback {Function}
 * @param errorCallback {Function}
 * @param withoutErrorToast {Boolean}
 */
export default ({
  requestBody,
  successCallback,
  errorCallback,
  withoutErrorToast = false,
}) => requestAsync({
  url: endpoints.putUserPinCodeUrl(),
  queryKey: `delete${endpoints.putUserPinCodeUrl()}`,
  body: requestBody,
  transform: ({ data }) => normalize(data, user.schema).entities,
  meta: {
    successCallback,
    errorCallback,
    withoutErrorToast,
    authToken: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'DELETE',
  },
  update: {
    user: (prevUserObj = Map(), newUserObj) =>
      prevUserObj.merge(newUserObj),
  },
});
