import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @param id {String}
 */
export default ({ id }) => requestAsync({
  url: endpoints.getStatisticUserUrl(id),
  transformResult: response => ({
    statisticUser: response.data,
  }),
  queryKey: endpoints.getStatisticUserUrl(),
  meta: {
    authToken: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  updateResult: {
    statisticUser: (_, result) => result,
  },
});
