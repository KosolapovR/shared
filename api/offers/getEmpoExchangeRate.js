import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @typedef GetEmpoExchangeRate
 * @property aliasSell {String}
 * @property aliasBuy {String}
 * @property walletSell {String}
 * @property walletBuy {String}
 *
 * @param {GetEmpoExchangeRate} queryParams
 * @param successCallback {Function}
 */
export default ({ queryParams, successCallback }) => requestAsync({
  url: endpoints.getEmpoExchangeRateUrl(queryParams),
  queryKey: endpoints.getEmpoExchangeRateUrl(),
  transformResult: response => ({
    empoExchangeRate: response.data,
  }),
  meta: {
    successCallback,
    withoutErrorToast: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  updateResult: {
    empoExchangeRate: (_, result) => result,
  },
});
