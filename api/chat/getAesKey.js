import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @typedef GetAesKey
 * @property public {String}
 * @property channelId {String}
 * @property userId {String}
 *
 * @param {GetAesKey} queryParams
 */
export default ({ queryParams }) => requestAsync({
  url: endpoints.getAesKeyUrl(queryParams),
  queryKey: endpoints.getAesKeyUrl(),
  meta: {
    authToken: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
});
