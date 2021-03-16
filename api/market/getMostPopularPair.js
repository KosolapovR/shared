import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

export default () => requestAsync({
  url: endpoints.getMostPopularPairUrl(),
  queryKey: endpoints.getMostPopularPairUrl(),
  transformResult: response => ({
    popularPair: response.data,
  }),
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  updateResult: {
    popularPair: (_, result) => result,
  },
});
