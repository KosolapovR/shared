import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { Map } from 'immutable';

export default () => requestAsync({
  url: endpoints.getStatisticUrl(),
  queryKey: endpoints.getStatisticUrl(),
  transformResult: response => ({
    statistic: response.data,
  }),
  meta: {
    authToken: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {},
  updateResult: {
    statistic: (prevResult = Map(), result) => prevResult.mergeDeep(result),
  },
});
