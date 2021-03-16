import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

export default () => requestAsync({
  url: endpoints.getMarketPeopleCountUrl(),
  queryKey: endpoints.getMarketPeopleCountUrl(),
  transformResult: response => ({
    marketPeopleCount: response.data,
  }),
  meta: {
    authToken: false,
    errorKey: 'GET_MARKET_USERS_COUNT',
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  updateResult: {
    marketPeopleCount: (_, result) => result,
  },
});
