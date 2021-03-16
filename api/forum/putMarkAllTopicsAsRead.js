import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { Map } from 'immutable';
import endpoints from '../endpoints';

/**
 *
 * @param successCallback {Function}
 */
export default ({ successCallback } = {}) => requestAsync({
  url: endpoints.getSubscriptionMarkAllAsReadUrl(),
  queryKey: endpoints.getSubscriptionMarkAllAsReadUrl(),
  meta: {
    authToken: true,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    topic: (prevState = Map()) => prevState.map(
      topic => topic.set('userUnreadMsg', 0),
    ),
  },
  updateResult: {
    subsCount: () => 0,
  },
});
