import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import endpoints from '../../api/endpoints';
import { dealComment } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @typedef PostDealComment {Object}
 * @property dealId {String}
 * @property text {String}
 */
export default requestBody => requestAsync({
  url: endpoints.getCommentReplyUrl(),
  transform: response =>
    normalize(response.data, dealComment.schema).entities,
  queryKey: endpoints.getCommentReplyUrl(),
  body: requestBody,
  meta: {
    authToken: true,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
  update: {
    dealComment: (prevEntities = Map(), nextEntities) =>
      prevEntities.mergeDeep(nextEntities),
  },
});
