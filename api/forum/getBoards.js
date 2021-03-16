import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { board } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @typedef GetBoards
 * @property page {Number}
 * @property count {Number}
 *
 * @param {GetBoards} queryParams
 */

export default ({ queryParams }) => requestAsync({
  url: endpoints.getBoardsUrl(queryParams),
  queryKey: endpoints.getBoardsUrl(),
  transform: response =>
    normalize(response.data, board.schemasArray).entities,
  transformResult: response => ({
    boards: normalize(response.data, board.schemasArray).result,
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
  update: {
    board: (prevEntities = Map(), entities) =>
      prevEntities.merge(entities),
  },
  updateResult: {
    boards: (prevResult, result) => result,
  },
});
