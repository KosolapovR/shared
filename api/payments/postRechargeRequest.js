import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @typedef PostRechargeRequest
 * @property amount {String}
 * @property description {String}
 * @property toWallet {String}
 * @property alias {String}
 *
 * @param {PostRechargeRequest} body
 * @param successCallback {Function}
 */

export default ({ body, successCallback }) => requestAsync({
  url: endpoints.getRechargeRequestUrl(),
  queryKey: endpoints.getRechargeRequestUrl(),
  transformResult: response => ({
    rechargeRequest: response.data,
  }),
  body,
  meta: {
    authToken: true,
    successCallback,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
  update: {},
  updateResult: {
    rechargeRequest: (_, result) => result,
  },
});
