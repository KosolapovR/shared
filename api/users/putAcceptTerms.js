import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { user } from '../../schemas';
import { Map } from 'immutable';
import { normalize } from 'normalizr';

/**
 *
 * @typedef PutTerms {Object}
 * @property latestVersion {String}
 *
 * @param successCallback {Function}
 */
export default ({ requestBody, successCallback }) => requestAsync({
  url: endpoints.getAcceptTermsUrl(),
  queryKey: endpoints.getAcceptTermsUrl(),
  transform: response => normalize(response.data, user.schema).entities,
  transformResult: response => ({
    user: normalize(response.data, user.schema).result,
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
    method: 'PUT',
  },
  update: {
    user: (prevEntities = Map(), nextEntities) => prevEntities.merge(nextEntities),
  },
  updateResult: {
    user: (_, result) => result,
  },
});
