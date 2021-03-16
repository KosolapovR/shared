import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { marketSubscription } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @param errorCallback {Function}
 * @param withoutErrorToast {Boolean}
 */
export default ({ errorCallback, withoutErrorToast = true } = {}) => requestAsync({
  url: endpoints.getSubscribeUrl(),
  queryKey: endpoints.getSubscribeUrl(),
  transform: response =>
    normalize(response.data, marketSubscription.schemasArray).entities,
  transformResult: response => ({
    marketSubscriptions: normalize(
        response ? response.data : {}, marketSubscription.schemasArray,
    ).result,
  }),
  meta: {
    authToken: true,
    errorKey: 'GET_SUBSCRIPTIONS',
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
    marketSubscription: (prevEntities = Map(), nextEntities) =>
      prevEntities.merge(nextEntities),
  },
  updateResult: {
    marketSubscriptions: (_, result) => result,
  },
});
