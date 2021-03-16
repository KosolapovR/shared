import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { topic } from '../../schemas';
import { Map } from 'immutable';

export default () => requestAsync({
  url: endpoints.getActiveTopicsUrl(),
  queryKey: endpoints.getActiveTopicsUrl(),
  transform: response =>
    normalize(response.data, topic.schemasArray).entities,
  transformResult: response => ({
    activeTopics: normalize(response.data, topic.schemasArray).result,
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
    topic: (prevEntities = Map(), entities) =>
      prevEntities.mergeDeep(entities),
  },
  updateResult: {
    activeTopics: (prevResult, result) => result,
  },
});
