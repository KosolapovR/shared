import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { topicMessage } from '../../schemas';
import { Map } from 'immutable';
import { parseJson } from '../../helpers';

/**
 *
 * @param id {String}
 * @param body {Object}
 * @param successCallback {Function}
 */
export default ({ id, body, successCallback }) => requestAsync({
  url: endpoints.getMessageByIdUrl(id),
  queryKey: `put${endpoints.getMessageByIdUrl()}`,
  transform: response =>
    normalize({
      ...response.data,
      attachments: response.data.attachments ? response.data.attachments.map(parseJson) : [],
    }, topicMessage.schema).entities,
  transformResult: response => ({
    topicMessage: normalize(response.data, topicMessage.schema).result,
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
    topicMessage: (prevEntities = Map(), entities) =>
      prevEntities.merge(entities),
  },
  updateResult: {
    topicMessage: (prevResult, result) => result,
  },
});
