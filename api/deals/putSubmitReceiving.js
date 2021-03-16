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
  url: endpoints.getSubmitReceivingUrl(id),
  queryKey: endpoints.getSubmitReceivingUrl(),
  transform: response =>
    normalize(response.data, deal.schema).entities,
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
    deal: (prevEntities = Map(), entities) =>
      prevEntities.mergeDeep(entities),
  },
});
