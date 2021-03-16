import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { transaction } from '../../schemas';
import { normalize } from 'normalizr';
import { List } from 'immutable';
import endpoints from '../endpoints';

export default () => requestAsync({
  url: endpoints.getLastTransactionsUrl(),
  queryKey: endpoints.getLastTransactionsUrl(),
  transform: ({ data }) => normalize(data, transaction.schemasArray).entities,
  transformResult: ({ data }) => ({
    transactionMeta: normalize(data, transaction.schemasArray).result,
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
  update: {
    transaction: (_, newTransaction = List()) => newTransaction,
  },
  updateResult: {
    transactionMeta: (_, newTransactionMeta) => newTransactionMeta,
  },
});
