import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @typedef GenerateWallet
 * @property chain {String}
 * @property type {String}
 * @property userAddress {String}
 *
 * @param {GenerateWallet} queryParams
 */
export default body => requestAsync({
  url: endpoints.getCreateWalletUrl(),
  body: {
    type: 'simple',
    ...body,
  },
  queryKey: `${body.type || ''}${endpoints.getCreateWalletUrl()}`,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
});
