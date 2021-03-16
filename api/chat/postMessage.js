import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { message } from '../../schemas';
import { parseJson } from '../../helpers';

/**
 *
 * @typedef PostMessage
 * @property files {Array}
 * @property body {String}
 * @property channelId {String}
 *
 * @param {PostMessage} requestBody
 * @param successCallback {Function}
 */
export default ({ requestBody, successCallback }) => requestAsync({
  url: endpoints.getMessageUrl(),
  queryKey: endpoints.getMessageUrl(),
  transform: response =>
    normalize(({
      ...response.data,
      files: response.data.files ? response.data.files.map(parseJson) : [],
    }), message.schema).entities,
  transformResult: response => ({
    messages: normalize(response.data, message.schema).result,
  }),
  body: requestBody,
  meta: {
    authToken: true,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
});
