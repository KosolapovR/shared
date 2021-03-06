import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import endpoints from '../../api/endpoints';
import { user } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @param requestBody {Object}
 * @param token {String}
 * @param successCallback {Function}
 */
export default ({ requestBody, token, successCallback }) => requestAsync({
  url: endpoints.getPasswordRecoveryUrl(),
  queryKey: `post${endpoints.getPasswordRecoveryUrl()}`,
  meta: {
    successCallback,
  },
  body: {
    password: requestBody.get('password'),
  },
  options: {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
  },
  transform: response => normalize(response.data, user.schema).entities,
  transformResult: response => ({
    user: normalize(response.data, user.schema).result,
  }),
  update: {
    user: (prevEntities = Map(), nextEntities) =>
      prevEntities.merge(nextEntities),
  },
  updateResult: {
    user: (_, result) => result,
  },
});
