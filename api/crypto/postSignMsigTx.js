import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @param txBody {String}
 * @param userPrivateKey {String}
 * @param chain {String}
 * @param alias {String}
 */
export default ({ body, pinCode }) => requestAsync({
  url: endpoints.getSignMsigTxUrl(),
  queryKey: endpoints.getSignMsigTxUrl(),
  meta: {
    withoutErrorToast: true,
    pinCode,
  },
  body,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
});
