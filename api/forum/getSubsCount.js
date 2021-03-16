import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

export default () => requestAsync({
  url: endpoints.getSubsCountUrl(),
  queryKey: endpoints.getSubsCountUrl(),
  transformResult: response => ({
    subsCount: response.data,
  }),
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
    subsCount: (prevResult, result) => result,
  },
});
