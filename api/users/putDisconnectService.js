import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import { user } from '../../schemas';
import endpoints from '../endpoints';

/**
 *
 * @param type {String}
 * @param passcode {Number}
 * @param errorCallback {Function}
 * @param successCallback {Function}
 */
export default ({
  type,
  passcode,
  errorCallback,
  successCallback,
}) => requestAsync({
  url: endpoints.putDisconnectServiceUrl({ type }),
  queryKey: endpoints.putDisconnectServiceUrl({}),
  body: { passcode },
  transform: ({ data }) => normalize(data, user.schema).entities,
  meta: {
    authToken: true,
    errorCallback,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    user: (prevUser, nextUser) => prevUser.merge(nextUser),
  },
});
