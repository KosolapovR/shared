import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { deal } from '../../schemas';
import { Map, List } from 'immutable';

/**
 *
 * @typedef GetDeals
 * @property type {String}
 *
 * @param {GetDeals} requestBody
 * @param resultKey {String}
 * @param errorCallback {Function}
 * @param withoutErrorToast {Boolean}
 * @param concatPrev {Boolean}
 */
export default ({
  requestBody,
  resultKey,
  errorCallback,
  withoutErrorToast = false,
  concatPrev = true,
}) => requestAsync({
  url: endpoints.getDealsUrl({ page: 1, limit: 3, ...requestBody }),
  queryKey: `${endpoints.getDealsUrl()}/${resultKey}`,
  transform: response =>
    normalize(response.data, deal.schemasArray).entities,
  transformResult: response => ({
    [resultKey]: normalize(response.data, deal.schemasArray).result,
    [`${resultKey}Meta`]: response.meta,
  }),
  meta: {
    authToken: true,
    errorKey: 'GET_DEALS_LIST',
    errorCallback,
    withoutErrorToast,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    deal: (prevDeal = Map(), nextDeal) => prevDeal.mergeDeep(nextDeal),
  },
  updateResult: {
    [resultKey]: (prevResult = List(), result) => {
      if (concatPrev) {
        return prevResult.concat(result);
      }
      return result;
    },
    [`${resultKey}Meta`]: (prevResult, result) => result,
  },
});
