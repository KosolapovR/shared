import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { deal } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @param id {String}
 */
export default ({ id }) => requestAsync({
  url: endpoints.getDealByIdUrl(id),
  queryKey: endpoints.getDealByIdUrl(),
  transform: response =>
    normalize(response.data, deal.schema).entities,
  transformResult: response => ({
    deal: normalize(response.data, deal.schema).result,
  }),
  meta: {
    authToken: true,
    errorKey: 'GET_DEAL',
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    deal: (prevEntities = Map(), entities) =>
      prevEntities.mergeDeep(entities),
  },
  updateResult: {
    deal: (prevResult, result) => result,
  },
});
