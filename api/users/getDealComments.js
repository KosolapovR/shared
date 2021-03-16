import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import endpoints from '../../api/endpoints';
import { dealComment } from '../../schemas';
import { Map, List } from 'immutable';

/**
 *
 * @param user {String}
 * @param count {Number}
 * @param page {Number}
 * @param resultKey {String}
 */

export default ({
  user,
  count,
  page,
  resultKey = 'dealComments',
}) => requestAsync({
  url: endpoints.getCommentsUrl({
    user,
    count,
    page,
  }),
  transform: response => normalize(response.data, dealComment.schemasArray).entities,
  transformResult: response => ({
    [resultKey]: normalize(response.data, dealComment.schemasArray).result,
    [`${resultKey}Meta`]: response.meta,
  }),
  queryKey: endpoints.getCommentsUrl(),
  meta: {
    authToken: true,
    withoutErrorToast: true,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    dealComment: (prevEntities = Map(), nextEntities) =>
      prevEntities.mergeDeep(nextEntities),
  },
  updateResult: {
    [resultKey]: (prevResult = List(), result) => {
      if (page === 1) {
        return result;
      }

      return prevResult.toSet().union(result.toSet()).toList();
    },
    [`${resultKey}Meta`]: (_, result) => result,
  },
});
