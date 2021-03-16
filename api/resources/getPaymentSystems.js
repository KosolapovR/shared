import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @param resultKey {String}
 */
export default ({ resultKey = 'paymentSystems' } = {}) => requestAsync({
  url: endpoints.getPaymentSystemsUrl(),
  transformResult: response => ({
    [resultKey]: response.data,
  }),
  meta: {
    errorKey: 'GET_PAYMENT_SYSTEMS',
  },
  queryKey: endpoints.getPaymentSystemsUrl(),
  options: {
    headers: {
      Accept: 'application/json',
    },
  },
  updateResult: {
    [resultKey]: (prevResult, result) => result,
  },
});
