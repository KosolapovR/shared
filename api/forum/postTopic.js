import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { topic } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @typedef  PostTopic
 * @property boardId {String}
 * @property title {String}
 *
 * @property msg {Object}
 * @property body {String}
 * @property attachments {String}
 * @property isSubNow {Boolean}
 *
 * @param {PostTopic} body
 * @param successCallback {Function}
 */
export default ({ body, successCallback }) => requestAsync({
  url: endpoints.getTopicUrl(),
  queryKey: endpoints.getTopicUrl(),
  transform: response =>
    normalize(response.data, topic.schema).entities,
  transformResult: response => ({
    topic: normalize(response.data, topic.schema).result,
  }),
  body,
  meta: {
    authToken: true,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
  update: {
    topic: (prevEntities = Map(), entities) =>
      prevEntities.mergeDeep(entities),
    topicMessage: (prevEntities = Map(), entities) =>
      prevEntities.mergeDeep(entities),
  },
  updateResult: {
    topic: (prevResult, result) => result,
  },
});
