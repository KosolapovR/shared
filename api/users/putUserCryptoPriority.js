import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import { user } from '../../schemas';
import { Map } from 'immutable';
import endpoints from '../endpoints';

/**
 * We don't use this route right now
 * @param requestBody {Objects}
 */
export default requestBody => requestAsync({
  url: endpoints.putUserCryptoPriorityUrl(),
  queryKey: endpoints.putUserCryptoPriorityUrl(),
  body: requestBody,
  transform: ({ data }) => normalize(data, user.schema),
  meta: {
    authToken: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    user: (prevUser = Map(), newUser) =>
      prevUser.merge(newUser),
  },
});
