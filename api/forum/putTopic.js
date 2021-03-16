import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { topic } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @param id {String}
 * @param body {Object}
 * @param successCallback {Function}
 */
export default ({ id, body, successCallback }) => requestAsync({
  url: endpoints.getTopicByIdUrl(id),
  queryKey: endpoints.getTopicByIdUrl(),
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
    method: 'PUT',
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
