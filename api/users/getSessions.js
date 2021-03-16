import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { session } from '../../schemas';
import { Map } from 'immutable';

export default () => requestAsync({
  url: endpoints.getSessionsUrl(),
  transform: response => normalize(response.data, session.schemasArray).entities,
  transformResult: response => ({
    sessions: normalize(response.data, session.schemasArray).result,
  }),
  queryKey: endpoints.getSessionsUrl(),
  meta: {
    authToken: true,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    session: (prevSession = Map(), nextSession) => prevSession.merge(nextSession),
  },
  updateResult: {
    sessions: (_, result) => result,
  },
});
