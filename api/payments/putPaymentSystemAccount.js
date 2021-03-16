import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { accountPaymentSystem } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @typedef PutPaymentSystem
 * @property apiKey {String}
 * @property name {String}
 *
 * @property || @typedef options {Object}
 * @property phone_number {String}
 *
 * @param {PutPaymentSystem} requestBody
 * @param id {String}
 * @param successCallback {Function}
 */

export default ({ requestBody, id, successCallback = () => {} }) => requestAsync({
  url: endpoints.getAccountPaymentSystemByIdUrl(id),
  queryKey: `put${endpoints.getAccountPaymentSystemByIdUrl(id)}`,
  transform: response => normalize(response.data, accountPaymentSystem.schema).entities,
  body: requestBody,
  meta: {
    authToken: true,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    accountPaymentSystem: (prevEntities = Map(), nextEntities) =>
      prevEntities.mergeDeep(nextEntities),
  },
});
