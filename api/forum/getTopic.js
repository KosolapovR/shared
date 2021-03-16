import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { topic } from '../../schemas';
import { Map } from 'immutable';
import { parseJson } from '../../helpers';

/**
 *
 * @typedef GetTopic
 * @property page {number}
 * @property count {Number}
 *
 * @param {GetTopic} queryParams
 * @param id {String}
 * @param successCallback {Function}
 * @param errorCallback {Function}
 */
export default ({
  id,
  queryParams,
  successCallback,
  errorCallback,
}) => requestAsync({
  url: endpoints.getTopicByIdUrl(id, queryParams),
  queryKey: endpoints.getTopicByIdUrl(),
  transform: response =>
    normalize({
      basic: response.data.basic,
      messages: response.data.messages.map(message => ({
        ...message,
        attachments: message.attachments ? message.attachments.map(parseJson) : [],
      })),
    }, topic.schemaWithMessages).entities,
  transformResult: response => ({
    topic: normalize(response.data, topic.schemaWithMessages).result,
    topicMeta: response.meta,
  }),
  meta: {
    authToken: true,
    successCallback,
    errorCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    topic: (prevEntities = Map(), entities) =>
      prevEntities.merge(entities),
    topicMessage: (prevEntities = Map(), entities) =>
      prevEntities.merge(entities),
  },
  updateResult: {
    topic: (prevResult, result) => result,
    topicMeta: (_, result) => result,
  },
});
