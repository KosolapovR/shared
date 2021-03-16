import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../endpoints';

/**
 *
 * @param type {String}
 * @param errorCallback {Function}
 */
export default ({ type, errorCallback }) => requestAsync({
  url: endpoints.getChatkeyUrl({ type }),
  queryKey: endpoints.getChatkeyUrl({}),
  transformResult: ({ data }) => ({
    chatKey: data,
  }),
  meta: {
    authToken: true,
    errorCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  updateResult: {
    chatKey: (_, key) => key,
  },
});
