import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { deal } from '../../schemas';
import { Map } from 'immutable';

/**
 * @param id {String}
 * @param successCallback {Function}
 */
export default ({ id, successCallback }) => requestAsync({
  url: endpoints.getInviteAdminUrl(id),
  queryKey: endpoints.getInviteAdminUrl(),
  transform: response =>
    normalize(response.data, deal.schema).entities,
  meta: {
    authToken: true,
    successCallback,
  },
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
