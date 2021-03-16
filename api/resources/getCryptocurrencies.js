import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @param resultKey {String}
 */
export default ({ resultKey = 'cryptocurrencies' } = {}) => requestAsync({
  url: endpoints.getCryptocurrenciesUrl(),
  transformResult: response => ({
    [resultKey]: response.data,
  }),
  meta: {
    errorKey: 'GET_CRYPTOCURRENCIES',
  },
  queryKey: endpoints.getCryptocurrenciesUrl(),
  options: {
    headers: {
      Accept: 'application/json',
    },
  },
  updateResult: {
    [resultKey]: (prevResult, result) => result,
  },
});
