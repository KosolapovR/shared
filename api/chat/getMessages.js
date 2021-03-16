import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { message } from '../../schemas';
import { Map } from 'immutable';
import { parseJson } from '../../helpers';

/**
 *
 * @param id {String}
 * @param successCallback {Function}
 */
export default ({ id, successCallback }) => requestAsync({
  url: endpoints.getMessagesUrl(id),
  queryKey: endpoints.getMessagesUrl(),
  transform: response =>
    normalize(response.data.map(item =>
      ({
        ...item,
        files: item.files ? item.files.filter(file => file).map(parseJson) : [],
      })), message.schemasArray).entities,
  transformResult: response => ({
    messages: normalize(response.data, message.schemasArray).result,
  }),
  meta: {
    authToken: true,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    message: (prevEntities = Map(), entities) =>
      prevEntities.merge(entities),
  },
  updateResult: {
    messages: (prevResult, result) => result,
  },
});
