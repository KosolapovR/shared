import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../endpoints';

/**
 *
 * @param pincode {String}
 * @param errorCallback {Function}
 */
export default ({ pincode, errorCallback }) => requestAsync({
  url: endpoints.getCheckPinUrl({ pincode }),
  queryKey: endpoints.getCheckPinUrl(),
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
