import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { story } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @param resultKey {String}
 */
export default ({
  resultKey = 'stories',
} = {}) => requestAsync({
  url: endpoints.getStoriesUrl(),
  queryKey: endpoints.getStoriesUrl(),
  transform: response =>
    normalize(response.data, story.schemasArray).entities,
  transformResult: response => ({
    [resultKey]: normalize(response.data, story.schemasArray).result,
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
    story: (prevEntities = Map(), nextEntities) =>
      prevEntities.merge(nextEntities),
  },
  updateResult: {
    [resultKey]: (prevResult, result) => result,
  },
});
