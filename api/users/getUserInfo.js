import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import endpoints from '../../api/endpoints';
import { userInfo } from '../../schemas';
import { Map } from 'immutable';
import _ from 'lodash';

/**
 *
 * @param id {String}
 * @param resultKey {String}
 * @param errorCallback {Function}
 */
export default ({ id, resultKey = 'profileUserInfo', errorCallback }) => requestAsync({
  url: endpoints.getUserInfoUrl({ users: id }),
  transform: response =>
    normalize(_.get(response, 'data.0', {}), userInfo.schema).entities,
  transformResult: response => ({
    [resultKey]: normalize(
      _.get(response, 'data.0', {}), userInfo.schema,
    ).result,
  }),
  queryKey: endpoints.getUserInfoUrl(),
  meta: {
    authToken: true,
    errorKey: 'INVALID_USER',
    errorCallback,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    userInfo: (prevEntities = Map(), nextEntities) =>
      prevEntities.mergeDeep(nextEntities),
  },
  updateResult: {
    [resultKey]: (prevResult, result) => result,
  },
});
