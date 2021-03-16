import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { news } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @param page {Number}
 * @param count {Number}
 * @param resultKey {String}
 * @param offset {Number}
 * @param isInternal {boolean}
 * @param current {String} Current news id (for relative news)
 */
export default ({
  page = 1,
  count = 9,
  resultKey = 'news',
  offset = 0,
  isInternal = false,
  current,
  sort = '-createdAt',
} = {}) => requestAsync({
  url: endpoints.getNewsUrl({
    page,
    count,
    offset,
    isInternal,
    current,
    sort,
  }),
  queryKey: endpoints.getNewsUrl(),
  transform: response =>
    normalize(response.data, news.schemasArray).entities,
  transformResult: response => ({
    [resultKey]: normalize(response.data, news.schemasArray).result,
    [`${resultKey}Meta`]: response.meta,
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
    news: (prevEntities = Map(), nextEntities) =>
      prevEntities.mergeDeep(nextEntities),
  },
  updateResult: {
    [resultKey]: (prevResult, result) => result,
    [`${resultKey}Meta`]: (prevResult, result) => result,
  },
});
