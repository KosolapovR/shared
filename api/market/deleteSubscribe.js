import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @param id {String}
 * @param errorCallback {Function}
 * @param successCallback {Function}
 */
export default ({ id, errorCallback, successCallback }) => requestAsync({
  url: endpoints.getSubcribeByIdUrl(id),
  queryKey: `delete${endpoints.getSubcribeByIdUrl()}`,
  meta: {
    authToken: true,
    errorKey: 'DELETE_SUBSCRIBE',
    errorCallback,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'DELETE',
  },
  update: {
    marketSubscription: prevResult => prevResult.filter(item => item.get('_id') !== id),
  },
  updateResult: {
    marketSubscriptions: prevResult => prevResult.filter(item => item !== id),
  },
});
