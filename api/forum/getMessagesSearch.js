import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { topicMessage } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @typedef GetMessagesSearch
 * @property page {Number}
 * @property count {Number}
 * @property title {String}
 * @property sort {Number}
 *
 * @param {GetMessagesSearch} queryParams
 */
export default ({ queryParams }) => requestAsync({
  url: endpoints.getMessagesSearchUrl(queryParams),
  queryKey: endpoints.getMessagesSearchUrl(),
  transform: response =>
    normalize(response.data, topicMessage.schemasArray).entities,
  transformResult: response => ({
    searchMessages: normalize(response.data, topicMessage.schemasArray).result,
    searchMeta: response.meta,
  }),
  meta: {
    authToken: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    topicMessage: (prevEntities = Map(), entities) =>
      prevEntities.mergeDeep(entities),
  },
  updateResult: {
    searchMessages: (prevResult, result) => result,
    searchMeta: (_, result) => result,
  },
});
