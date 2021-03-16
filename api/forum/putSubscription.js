import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { Map } from 'immutable';

/**
 *
 * @param body {Object}
 */
export default ({ body }) => requestAsync({
  url: endpoints.getSubscriptionUrl(),
  queryKey: `put${endpoints.getSubscriptionUrl()}`,
  transform: response => ({ topic: response.data }),
  body,
  meta: {
    authToken: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    topic: (prevEntities = Map(), nextEntities) => (
      prevEntities.update(body.topicId, topic => (
        topic.update('basic', basic => (
          basic.update('isUserSub', () => nextEntities.get('isUserSub'))
        ))))
    ),
  },
});

// isUserSub
