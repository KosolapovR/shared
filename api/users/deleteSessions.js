import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../endpoints';

/**
 *
 * @param successCallback {Function}
 */

export default ({ successCallback }) => requestAsync({
  url: endpoints.getSessionsUrl(),
  queryKey: `${endpoints.getSessionsUrl()}`,
  meta: {
    authToken: true,
    successCallback,
  },
  options: {
    method: 'DELETE',
  },
});
