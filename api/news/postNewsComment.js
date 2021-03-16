import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { news } from '../../schemas';
import { Map } from 'immutable';
import _ from 'lodash';

/**
 *
 * @param id {String}
 * @param requestBody {Object}
 * @param resultKey {String}
 * @param successCallback {Function}
 */
export default ({
  id,
  requestBody,
  resultKey = 'singleNews',
  successCallback,
} = {}) => requestAsync({
  url: endpoints.getNewsCommentsUrl(id),
  queryKey: endpoints.getNewsCommentsUrl(),
  transform: response =>
    normalize(_.get(response, 'data.basic'), news.schema).entities,
  transformResult: response => ({
    [resultKey]: normalize(_.get(response, 'data.basic'), news.schema).result,
    [`${resultKey}Comments`]: _.get(response, 'data.comments'),
  }),
  body: requestBody,
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
    news: (prevEntities = Map(), nextEntities) =>
      prevEntities.mergeDeep(nextEntities),
  },
  updateResult: {
    [resultKey]: (prevResult, result) => result,
    [`${resultKey}Comments`]: (prevResult, result) => result,
  },
});
