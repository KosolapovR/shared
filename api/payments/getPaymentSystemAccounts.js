import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { accountPaymentSystem } from '../../schemas';
import { transformed } from '../../helpers';

export default () => requestAsync({
  url: endpoints.getAccountPaymentSystemsUrl(),
  queryKey: endpoints.getAccountPaymentSystemsUrl(),
  transform: response =>
    normalize(
      transformed.getPaymentAccounts(response.data),
      accountPaymentSystem.schemasArray,
    ).entities,
  transformResult: response => ({
    accountPaymentSystems: normalize(
      transformed.getPaymentAccounts(response.data),
      accountPaymentSystem.schemasArray,
    ).result,
  }),
  meta: {
    authToken: true,
    withoutErrorToast: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    accountPaymentSystem: (_, nextEntities) => nextEntities,
  },
  updateResult: {
    accountPaymentSystems: (_, nextResult) => nextResult,
  },
});
