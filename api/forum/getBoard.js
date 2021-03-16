import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { board } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @typedef GetBoard
 * @property page {Number}
 * @property count {Number}
 *
 * @param {GetBoard} queryParams
 * @param id {String}
 * @param errorCallback {Function}
 */
export default ({ id, queryParams, errorCallback }) => requestAsync({
  url: endpoints.getBoardUrl(id, queryParams),
  queryKey: endpoints.getBoardUrl(),
  transform: response =>
    normalize(response.data, board.schemaWithTopic).entities,
  transformResult: response => ({
    board: normalize(response.data, board.schemaWithTopic).result,
    boardMeta: response.meta,
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
  update: {
    board: (_, entities) => entities,
    topic: (prevEntities = Map(), entities) =>
      prevEntities.mergeDeep(entities),
  },
  updateResult: {
    board: (prevResult, result) => result,
    boards: () => [],
    boardMeta: (_, result) => result,
  },
});
