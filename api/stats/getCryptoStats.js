import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { cryptoStat } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @typedef GetCryptoStats
 * @property period {String}
 *
 * @param {GetCryptoStats} params
 * @param alias {String}
 */
export default ({ alias, params } = {}) => requestAsync({
  url: endpoints.getCryptoStatUrl(alias, params),
  queryKey: endpoints.getCryptoStatUrl(),
  transform: response =>
    normalize(response.data, cryptoStat.schema).entities,
  transformResult: response => ({
    cryptoStats: normalize(response.data, cryptoStat.schema).result,
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
  update: {
    cryptoStat: (_, result) => result || Map(),
  },
  updateResult: {
    cryptoStats: (_, result) => result,
  },
});
