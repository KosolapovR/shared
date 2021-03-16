import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import endpoints from '../../api/endpoints';
import { user } from '../../schemas';
import { Map } from 'immutable';

export default () => requestAsync({
  url: endpoints.getUserUrl(),
  transform: response => normalize(response.data, user.schema).entities,
  transformResult: response => ({
    user: normalize(response.data, user.schema).result,
  }),
  queryKey: `get${endpoints.getUserUrl()}`,
  meta: {
    authToken: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    user: (prevEntities = Map(), nextEntities) =>
      prevEntities.merge(nextEntities),
  },
  updateResult: {
    user: (_, result) => result,
  },
});
