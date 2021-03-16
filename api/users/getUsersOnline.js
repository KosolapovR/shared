import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import endpoints from '../../api/endpoints';
import { user } from '../../schemas';
import { Map } from 'immutable';
import _ from 'lodash';

export default () => requestAsync({
  url: endpoints.getUsersOnlineUrl(),
  transform: response => normalize(response.data.onlineUsers, user.schemasArray).entities,
  transformResult: response => ({
    onlineUsers: normalize(response.data.onlineUsers, user.schemasArray).result,
    statistic: {
      maxOnline: _.get(response, 'data.maxOnline', 0),
      currentOnline: _.get(response, 'data.currentOnline', 0),
      updatedAt: _.get(response, 'data.updatedAt'),
    },
  }),
  queryKey: endpoints.getUsersOnlineUrl(),
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
    user: (prevEntities = Map(), nextEntities) =>
      prevEntities.mergeDeep(nextEntities),
  },
  updateResult: {
    onlineUsers: (prevResult, result) => result,
    statistic: (prevResult = Map(), result) => prevResult.mergeDeep(result),
  },
});
