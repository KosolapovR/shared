import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import endpoints from '../../api/endpoints';
import { user } from '../../schemas';
import { Map } from 'immutable';

/**
 * @typedef PutLanguage
 * @property language {String}
 */
export default requestBody => requestAsync({
  url: endpoints.getChangeUserLanguage(),
  queryKey: endpoints.getChangeUserLanguage(),
  transform: response => normalize(response.data, user.schema).entities,
  body: requestBody,
  meta: {
    authToken: true,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    user: (prevUser = Map(), nextUser) =>
      prevUser.merge(nextUser),
  },
});
