import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @typedef GetAllCryptoStats
 * @property period {String}
 */
export default (params = {}) => requestAsync({
  url: endpoints.getAllCryptoStatsUrl(params),
  queryKey: endpoints.getAllCryptoStatsUrl(),
  transformResult: response => ({
    allCryptoStats: response.data,
  }),
  meta: {
    authToken: true,
    errorKey: 'GET_CRYPTO_STATS',
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  updateResult: {
    allCryptoStats: (_, result) => result,
  },
});
