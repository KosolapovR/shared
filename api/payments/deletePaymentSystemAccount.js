import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { accountPaymentSystem } from '../../schemas';

export default ({ id, successCallback }) => requestAsync({
  url: endpoints.getAccountPaymentSystemByIdUrl(id),
  queryKey: `delete${endpoints.getAccountPaymentSystemByIdUrl(id)}`,
  transform: response => normalize(response.data, accountPaymentSystem.schemasArray).entities,
  transformResult: response => ({
    accountPaymentSystems: normalize(response.data, accountPaymentSystem.schemasArray).result,
  }),
  meta: {
    authToken: true,
    successCallback,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'DELETE',
  },
  update: {
    accountPaymentSystem: (_, nextEntities) => nextEntities,
  },
  updateResult: {
    accountPaymentSystems: (_, result) => result,
  },
});
