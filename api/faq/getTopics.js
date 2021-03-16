import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { FAQTopic } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @param errorCallback {Function}
 */
export default ({ errorCallback } = {}) => requestAsync({
  url: endpoints.getFaqTopicsUrl(),
  queryKey: endpoints.getFaqTopicsUrl(),
  transform: response =>
    normalize(response.data, FAQTopic.schemasArray).entities,
  transformResult: response => ({
    topicsFaq: normalize(response.data, FAQTopic.schemasArray).result,
  }),
  meta: {
    errorKey: 'GET_TOPICS',
    errorCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    FAQTopic: (prevTopic = Map(), nextTopic) =>
      prevTopic.merge(nextTopic),
  },
  updateResult: {
    topicsFaq: (_, result) => result,
  },
});
