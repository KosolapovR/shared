import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import endpoints from '../../api/endpoints';
import { user } from '../../schemas';
import { mergeEntities } from '../../helpers';
import { Map } from 'immutable';

/**
 *
 * @param type {string}
 * @param id {String}
 * @param username {String}
 * @param resultKey {String}
 * @param errorCallback {Function}
 * @param successCallback {Function}
 */
export default ({
  type,
  id,
  username,
  errorCallback,
  successCallback,
  resultKey = 'publicUser',
}) => requestAsync({
  url: endpoints.getPublicUserProfileUrl({ id, username, extended: !!type }),
  transform: response => normalize(response.data, user.schema).entities,
  transformResult: response => ({
    [resultKey]: normalize(response.data, user.schema).result,
  }),
  queryKey: endpoints.getPublicUserProfileUrl(),
  meta: {
    authToken: true,
    errorKey: 'INVALID_USER',
    errorCallback,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    user: (prevEntities = Map(), nextEntities) =>
      prevEntities.mergeWith(mergeEntities, nextEntities),
  },
  updateResult: {
    [resultKey]: (_, result) => result,
  },
});
