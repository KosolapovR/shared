import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { marketSubscription } from '../../schemas';
import { Map, List } from 'immutable';

/**
 *
 * @typedef PostCreateSubscription
 * @property sellCurrencyName {String}
 * @property sellCurrencyAlias {String}
 * @property walletSendAlias {String}
 * @property buyCurrencyName {String}
 * @property buyCurrencyAlias {String}
 * @property walletReceiveAlias {String}
 * @property type {String}
 * @property price {Number}
 * @property reserve {Number}
 * @property duration {String}
 * @property emailNotification {String}
 *
 * @param {PostCreateSubscription} requestBody
 * @param errorCallback {Function}
 * @param successCallback {Function}
 * @param isEdit {Boolean}
 */
export default ({
  requestBody,
  errorCallback,
  successCallback,
  isEdit,
}) => requestAsync({
  url: endpoints.getSubscriptionsUrl(),
  queryKey: endpoints.getSubscriptionsUrl(),
  transform: response => normalize(response.data, marketSubscription.schema).entities,
  transformResult: response => ({
    marketSubscriptions: normalize(response.data, marketSubscription.schema).result,
  }),
  body: requestBody,
  meta: {
    authToken: true,
    withoutErrorToast: true,
    errorCallback,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
  update: {
    marketSubscription: (prevEntities = Map(), nextEntities) =>
      prevEntities.merge(nextEntities),
  },
  updateResult: {
    marketSubscriptions: (prevResult = List(), result) => (isEdit
      ? prevResult
      : prevResult.push(result)),
  },
});
