import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../endpoints';

/**
 *
 * @param type {String}
 * @param errorCallback {Function}
 */
export default ({ type, errorCallback }) => requestAsync({
  url: endpoints.getPasscodeUrl({ type }),
  queryKey: endpoints.getPasscodeUrl({ type }),
  meta: {
    authToken: true,
    errorCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
});
