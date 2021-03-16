import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { topic } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @typedef  GetSubscriptions
 * @property page {Number}
 * @property count {Number}
 *
 * @param {GetSubscriptions} queryParams
 * @param successCallback {Function}
 * @param errorCallback {Function}
 */
export default ({ queryParams, successCallback, errorCallback }) => requestAsync({
  url: endpoints.getSubscriptionUrl(queryParams),
  queryKey: endpoints.getSubscriptionUrl(),
  transform: response =>
    normalize(response.data, topic.schemasArray).entities,
  transformResult: response => ({
    subscriptions: normalize(response.data, topic.schemasArray).result,
    subscriptionsMeta: response.meta,
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
      prevEntities.mergeDeep(entities),
  },
  updateResult: {
    subscriptions: (prevResult, result) => result,
    subscriptionsMeta: (_, result) => result,
  },
});
