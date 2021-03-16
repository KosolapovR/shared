import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @param successCallback {Function}
 * @param errorCallback {Function}
 * @param withoutErrorToast {Boolean}
 */
export default ({ successCallback, errorCallback, withoutErrorToast = true } = {}) => requestAsync({
  url: endpoints.getUserLocationUrl(),
  queryKey: endpoints.getUserLocationUrl(),
  transformResult: response => ({
    userLocation: response.data,
  }),
  meta: {
    authToken: true,
    successCallback,
    errorCallback,
    withoutErrorToast,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  updateResult: {
    userLocation: (_, result) => result,
  },
});
