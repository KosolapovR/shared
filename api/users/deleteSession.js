import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @param requestBody {Object}
 */
export default requestBody => requestAsync({
  url: endpoints.getSessionUrl(),
  queryKey: `delete${endpoints.getSessionUrl()}`,
  body: requestBody,
  meta: {
    authToken: true,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'DELETE',
  },
  update: {
    session: prevResult => prevResult.filter(item => item.get('id') !== requestBody.id),
  },
  updateResult: {
    sessions: prevResult => prevResult.filter(item => item !== requestBody.id),
  },
});
