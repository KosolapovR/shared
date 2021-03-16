import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { topic } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @typedef GetTopicsSearch
 * @property page {Number}
 * @property count {Number}
 * @property title {String}
 * @property sort {Number}
 *
 * @param {GetTopicsSearch} queryParams
 */
export default ({ queryParams }) => requestAsync({
  url: endpoints.getTopicsSearchUrl(queryParams),
  queryKey: endpoints.getTopicsSearchUrl(),
  transform: response =>
    normalize(response.data, topic.schemasArray).entities,
  transformResult: response => ({
    searchTopics: normalize(response.data, topic.schemasArray).result,
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
    topic: (prevEntities = Map(), entities) =>
      prevEntities.mergeDeep(entities),
  },
  updateResult: {
    searchTopics: (prevResult, result) => result,
    searchMeta: (_, result) => result,
  },
});
