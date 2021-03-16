import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @param successCallback {Function}
 */
export default ({ successCallback } = {}) => requestAsync({
  url: endpoints.getLogOutUrl(),
  queryKey: endpoints.getLogOutUrl(),
  meta: {
    authToken: true,
    errorKey: 'USER_LOGOUT',
    successCallback,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
  updateResult: {
    user: () => '',
  },
});
