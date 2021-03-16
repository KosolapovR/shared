import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import endpoints from '../../api/endpoints';
import { user } from '../../schemas';
import { Map } from 'immutable';

/**
 * Размещает профиль пользователя
 *
 * @param requestBody {Object}
 */
export default requestBody => requestAsync({
  url: endpoints.getPutUserProfileUrl(),
  transform: response => normalize(response.data, user.schema).entities,
  transformResult: response => ({
    user: normalize(response.data, user.schema).result,
  }),
  queryKey: `put${endpoints.getPutUserProfileUrl()}`,
  meta: {
    authToken: true,
  },
  body: requestBody,
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    user: (prevEntities = Map(), nextEntities) =>
      prevEntities.merge(nextEntities),
  },
  updateResult: {
    user: (_, result) => result,
  },
});
