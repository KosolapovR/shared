import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @param PostCreateTX
 * @property alias {String}
 * @property userPrivateKey {String}
 * @property amount {Number}
 * @property commission {Number}
 * @property targetAddress {String}
 * @property body {Array}
 * @property toWallet {String}
 * @property fromWallet {String}
 *
 * @param {PostCreateTX} body
 */

export default ({ body, pinCode }) => requestAsync({
  url: endpoints.getCreateTxUrl(),
  queryKey: endpoints.getCreateTxUrl(),
  body,
  meta: {
    pinCode,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
});
