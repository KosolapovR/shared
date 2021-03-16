import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @param id {String}
 */
export default ({ id }) => requestAsync({
  url: endpoints.getRechargeRequestByIdUrl(id),
  queryKey: endpoints.getRechargeRequestByIdUrl(),
  transformResult: response => ({
    rechargeRequest: response.data,
  }),
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
  update: {},
  updateResult: {
    rechargeRequest: (_, result) => result,
  },
});
