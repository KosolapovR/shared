import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { user } from '../../schemas';
import { normalize } from 'normalizr';
import endpoints from '../endpoints';

/**
 * @typedef SelectedCurrenciesBody
 * @property {string} currencies
 *
 * @param {SelectedCurrenciesBody} requestBody
 * @param successCallback {Function}
 * @param errorCallback {Function}
 */
export default ({
  requestBody: {
    currencies,
  },
  successCallback,
  errorCallback,
} = {}) => requestAsync({
  url: endpoints.putUserCryptoSelectedUrl(),
  queryKey: endpoints.putUserCryptoSelectedUrl(),
  body: { currencies },
  transform: ({ data }) => normalize(data, user.schema).entities,
  meta: {
    authToken: true,
    successCallback,
    errorCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    user: (prevUser, nextUser) => nextUser,
  },
});
