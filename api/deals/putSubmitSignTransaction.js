import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { deal } from '../../schemas';
import { Map } from 'immutable';

export default ({ id, pinCode, ...body }) => requestAsync({
  url: endpoints.getSubmitSignTransactionUrl(id),
  queryKey: endpoints.getSubmitSignTransactionUrl(),
  transform: response =>
    normalize(response.data, deal.schema).entities,
  meta: {
    authToken: true,
    pinCode,
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
