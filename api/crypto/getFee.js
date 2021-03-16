import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @typedef GetFee
 * @property action {String}
 * @property chain {String}
 *
 * @param {GetFee} queryParams
 * @param successCallback {Function}
 * @param errorCallback {Function}
 */
export default ({ queryParams, successCallback, errorCallback }) => requestAsync({
  url: endpoints.getFeeUrl(queryParams),
  queryKey: endpoints.getFeeUrl(),
  meta: {
    successCallback,
    errorCallback,
    errorKey: 'GET_FEE',
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
});
