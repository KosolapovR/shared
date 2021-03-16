import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import { user } from '../../schemas';
import { Map } from 'immutable';
import endpoints from '../endpoints';

/**
 *
 * @param token {String}
 * @param email {String}
 * @param errorCallback
 * @param successCallback
 */
export default ({
  token,
  email,
  errorCallback,
  successCallback,
}) => requestAsync({
  url: endpoints.getSendUserReserveEmailConfirmUrl({ email }),
  queryKey: endpoints.getSendUserReserveEmailConfirmUrl({ email }),
  transform: ({ data }) => normalize(data, user.schema).entities,
  meta: {
    errorCallback,
    successCallback,
    errorKey: 'RESERVE_EMAIL_CONFIRM',
  },
  options: {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  },
  update: {
    user: (prevUser = Map(), newUser) => prevUser.merge(newUser),
  },
});
