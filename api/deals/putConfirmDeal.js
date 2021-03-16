import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { deal } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @param body {Object}
 * @param id {String}
 */
export default ({ id, ...body }) => requestAsync({
  url: endpoints.getConfirmDealUrl(id),
  queryKey: endpoints.getConfirmDealUrl(),
  transform: response =>
    normalize(response.data, deal.schema).entities,
  meta: {
    authToken: true,
  },
  body,
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
