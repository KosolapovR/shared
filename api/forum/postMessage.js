import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @typedef PostMessage
 * @property body {String}
 * @property quotedMsgId {String || undefined}
 * @property attachments {String}
 * @property topicId {String}
 * @property isNotify {Boolean}
 *
 * @param {PostMessage} body
 * @param successCallback {Function}
 */
export default ({ body, successCallback }) => requestAsync({
  url: endpoints.getMessagesTopicUrl(),
  queryKey: `post${endpoints.getMessagesTopicUrl()}`,
  body,
  meta: {
    successCallback,
    authToken: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
});
