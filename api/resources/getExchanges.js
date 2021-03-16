import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { exchange } from '../../schemas';
import { normalize } from 'normalizr';
import endpoints from '../endpoints';

export default () => requestAsync({
  url: endpoints.getExchangesListUrl({ status: 'active' }),
  queryKey: endpoints.getExchangesListUrl(),
  transform: ({ data }) => normalize(data, exchange.schemasArray).entities,
  transformResult: ({ data }) => ({
    exchanges: normalize(data, exchange.schemasArray).result,
  }),
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    exchange: (_, newExchanges) => newExchanges,
  },
  updateResult: {
    exchanges: (_, newExchangeMeta) => newExchangeMeta,
  },
});
