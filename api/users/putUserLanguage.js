import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { Map } from 'immutable';
import { normalize } from 'normalizr';
import { user } from '../../schemas';
import endpoints from '../endpoints';

/**
 * @typedef AddUserLanguadge
 * @property {String}
 *
 * @param {AddUserLanguadge} requestBody
 * @param successCallback {Function}
 * @param errorCallback {Function}
 */
export default ({ requestBody, successCallback, errorCallback }) => requestAsync({
  url: endpoints.putUserLanguageUrl(),
  queryKey: endpoints.putUserLanguageUrl(),
  body: requestBody,
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
    user: (prevUserObj = Map(), newUserObj) =>
      prevUserObj.merge(newUserObj),
  },
});
