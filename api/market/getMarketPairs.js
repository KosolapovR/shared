import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

export default () => requestAsync({
  url: endpoints.getMarketPairsUrl(),
  queryKey: endpoints.getMarketPairsUrl(),
  transformResult: response => ({
    marketPairs: response.data,
  }),
  meta: {
    errorKey: 'GET_MARKET_FILTERS',
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  updateResult: {
    marketPairs: (_, result) => result,
  },
});
