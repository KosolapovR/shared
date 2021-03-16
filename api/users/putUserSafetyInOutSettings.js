import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import { Map } from 'immutable';
import { user } from '../../schemas';
import endpoints from '../endpoints';

/**
 * @typedef InOutSafetySettingsBody
 * @property {number} loginAttemptsLimit - login attempts before block
 * @property {number} autoExit - amount of time before exit
 * @property {boolean} onlyCurrentIp - restrict access to account by owner's ip
 * @property {string[]} lockCountries - list of countries from which need to block any actions
 *
 * @param {InOutSafetySettingsBody} requestBody
 * @param successCallback {Function}
 */
export default ({ requestBody, successCallback }) => requestAsync({
  url: endpoints.putUserSafetyInOutSettingsUrl(),
  queryKey: `put${endpoints.putUserSafetyInOutSettingsUrl()}`,
  body: requestBody,
  transform: ({ data }) => normalize(data, user.schema).entities,
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
    user: (prevUserObj = Map(), nextUserObj) => prevUserObj.merge(nextUserObj),
  },
});
