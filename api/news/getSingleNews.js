import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { news } from '../../schemas';
import { Map } from 'immutable';
import _ from 'lodash';

/**
 *
 * @param id {String}
 * @param resultKey {String}
 * @param errorCallback {Function}
 */
export default ({
  id,
  resultKey = 'singleNews',
  errorCallback,
} = {}) => requestAsync({
  url: endpoints.getSingleNewsUrl(id),
  queryKey: endpoints.getSingleNewsUrl(),
  transform: response =>
    normalize(_.get(response, 'data.basic'), news.schema).entities,
  transformResult: response => ({
    [resultKey]: normalize(_.get(response, 'data.basic'), news.schema).result,
    [`${resultKey}Comments`]: _.get(response, 'data.comments'),
  }),
  meta: {
    authToken: true,
    errorCallback,
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
    [`${resultKey}Comments`]: (prevResult, result) => result,
  },
});
