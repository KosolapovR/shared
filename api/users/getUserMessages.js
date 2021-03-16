import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import { userMessage } from '../../schemas';
import { Map } from 'immutable';
import endpoints from '../endpoints';

/**
 *
 * @param userId {String}
 * @param page {Number}
 * @param count {Number}
 * @param sort {String}
 */
export default ({
  userId,
  page = 1,
  count = 20,
  sort = '-createdAt',
  resultKey = 'userMessages',
}) => requestAsync({
  url: endpoints.getForumUserMessages(userId, { page, count, sort }),
  queryKey: endpoints.getForumUserMessages(),
  transform: response => normalize(response.data, userMessage.schemasArray).entities,
  transformResult: response => ({
    [resultKey]: normalize(response.data, userMessage.schemasArray).result,
    [`${resultKey}Meta`]: response.meta || Map(),
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
    userMessage: (prevEntities = Map(), entities) =>
      prevEntities.mergeDeep(entities),
  },
  updateResult: {
    [resultKey]: (prevResult, result) => result,
    [`${resultKey}Meta`]: (prevResult, result) => result,
  },
});
