import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { Map, List } from 'immutable';

/**
 *
 * @typedef GetMarketOffers
 * @property type {String}
 * @property filter {Boolean}
 * @property page {Number}
 * @property limit {Number}
 * @property requestBody {Array}
 *
 * @param {GetMarketOffers} requestBody
 * @param resultKey {String}
 * @param errorCallback {Function}
 * @param metaKey {String}
 * @param concatPrev {Boolean}
 */

export default ({
  requestBody,
  resultKey,
  errorCallback,
  concatPrev = false,
}) => requestAsync({
  url: endpoints.getMarketUrl(requestBody),
  queryKey: `${resultKey}${endpoints.getMarketUrl()}`,
  transformResult: response => ({ [`${resultKey}Meta`]: response.meta, [resultKey]: response.data }),
  meta: {
    errorKey: 'GET_OFFERS',
    errorCallback,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  updateResult: {
    [resultKey]: (prevResult = List(), result) => (
      (concatPrev ? prevResult.concat(result) : result) || List()
    ),
    [`${resultKey}Meta`]: (_, result) => result || Map(),
  },
});
