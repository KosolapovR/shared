import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @typedef GetCurrencyCommission
 * @property serviceSell {String}
 *
 * @param {GetCurrencyCommission} queryParams
 * @param currencyAlias {String}
 */
export default (currencyAlias, queryParams) => requestAsync({
  url: endpoints.getCurrencyCommissionUrl(currencyAlias, queryParams),
  queryKey: endpoints.getCurrencyCommissionUrl(),
  transformResult: response => ({ currencyCommission: response.data }),
  meta: {
    authToken: true,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  updateResult: {
    currencyCommission: (_, result) => result,
  },
});
