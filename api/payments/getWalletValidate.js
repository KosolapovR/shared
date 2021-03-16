import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @typedef GetWalletValidate
 * @property address {String}
 * @property alias {String}
 *
 * @param {GetWalletValidate} queryParams
 * @param successCallback {Function}
 */

export default ({ queryParams, successCallback }) => requestAsync({
  url: endpoints.getWalletValidateUrl(queryParams),
  queryKey: endpoints.getWalletValidateUrl(),
  meta: {
    authToken: true,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
});
