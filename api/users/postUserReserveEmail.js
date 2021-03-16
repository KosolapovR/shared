import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { user } from '../../schemas';
import { normalize } from 'normalizr';
import { Map } from 'immutable';
import endpoints from '../endpoints';

/**
 *
 * @param requestBody {Object}
 * @param successCallback {Function}
 * @param errorCallback {Function}
 */
export default ({ requestBody, successCallback, errorCallback }) => requestAsync({
  url: endpoints.postReserveEmailUrl(),
  queryKey: `post${endpoints.postReserveEmailUrl()}`,
  body: requestBody,
  transform: ({ data }) => normalize(data, user.schema).entities,
  meta: {
    successCallback,
    errorCallback,
    authToken: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
  update: {
    user: (prevUserObj = Map(), nextUserObj) =>
      prevUserObj.merge(nextUserObj),
  },
});
