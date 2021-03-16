import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import { user } from '../../schemas';
import { Map } from 'immutable';
import endpoints from '../endpoints';

/**
 * @typedef SecretQuestionsBody
 * @property {string} question1
 * @property {string} answer1
 * @property {string} question2
 * @property {string} answer2
 * @property {string} password
 *
 * @param {SecretQuestionsBody} requestBody
 * @param successCallback {Function}
 * @param errorCallback
 */
export default ({ requestBody, successCallback, errorCallback }) => requestAsync({
  url: endpoints.putUserSecretQuestionsUrl(),
  queryKey: `put${endpoints.putUserSecretQuestionsUrl()}`,
  body: requestBody,
  transform: ({ data }) => normalize(data, user.schema).entities,
  meta: {
    authToken: true,
    successCallback,
    errorCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    user: (prevUserObj = Map(), nextUserObj) =>
      prevUserObj.merge(nextUserObj),
  },
});
