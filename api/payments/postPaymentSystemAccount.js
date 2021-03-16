import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { accountPaymentSystem } from '../../schemas';
import { Map, List } from 'immutable';
import { transformed } from '../../helpers';

/**
 *
 * @typedef PostPaymentSystem
 * @property phoneNumber {String}
 * @property values {Array}
 *
 * @param {PostPaymentSystem} requestBody
 * @param queryParams {Object}
 * @param successCallback {Function}
 */
export default ({ requestBody, queryParams = {}, successCallback }) => requestAsync({
  url: endpoints.getAccountPaymentSystemsUrl(queryParams),
  queryKey: `post${endpoints.getAccountPaymentSystemsUrl()}`,
  transform: response =>
    normalize(
      transformed.getPaymentAccount(response.data),
      accountPaymentSystem.schema,
    ).entities,
  transformResult: response => ({
    accountPaymentSystems: normalize(
      transformed.getPaymentAccount(response.data),
      accountPaymentSystem.schema,
    ).result,
  }),
  body: requestBody,
  meta: {
    authToken: true,
    errorKey: 'POST_PAYMENT_SYSTEM',
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
  update: {
    accountPaymentSystem: (entities = Map(), nextEntities) =>
      entities.mergeDeep(nextEntities),
  },
  updateResult: {
    accountPaymentSystems: (prevResult = List(), result) => prevResult.push(result),
  },
});
