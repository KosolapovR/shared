import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { Map } from 'immutable';
import { votes } from '../../schemas';

/**
 *
 * @param id {String}
 */
export default ({ id }) => requestAsync({
  url: endpoints.getVotesUrl(id),
  queryKey: endpoints.getVotesUrl(),
  transform: response =>
    normalize(response.data, votes.schemasArray).entities,
  transformResult: response => ({
    votes: normalize(response.data, votes.schemasArray).result,
  }),
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  meta: {
    authToken: true,
  },
  update: {
    votes: (prevEntities = Map(), entities) =>
      prevEntities.mergeDeep(entities),
  },
  updateResult: {
    votes: (_, result) => result,
  },
});
