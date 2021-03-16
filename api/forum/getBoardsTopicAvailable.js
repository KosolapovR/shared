import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

export default () => requestAsync({
  url: endpoints.getBoardsTopicAvailableUrl(),
  queryKey: endpoints.getBoardsTopicAvailableUrl(),
  transformResult: response => ({
    boardsTopicAvailable: response.data,
  }),
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  updateResult: {
    boardsTopicAvailable: (prevResult, result) => result,
  },
});
