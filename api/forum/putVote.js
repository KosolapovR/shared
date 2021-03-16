import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { Map } from 'immutable';
import { topicMessage } from '../../schemas';

/**
 *
 * @typedef PutVote
 * @property id {String}
 *
 * @property body {Object}
 * @property isLike {Boolean}
 *
 * @param {PutVote} body
 * @param id {String}
 */
export default ({ id, body }) => requestAsync({
  url: endpoints.getVotesUrl(id),
  queryKey: `put${endpoints.getVotesUrl()}`,
  transform: response =>
    normalize(response.data, topicMessage.schema).entities,
  body,
  meta: {
    authToken: true,
  },
  update: {
    topicMessage: (prevEntities = Map(), entities) =>
      prevEntities.update(id, message =>
        message.merge(
          Map({ userVote: entities.first().get('userVote'), voteCounter: entities.first().get('voteCounter') }),
        )),
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
});
