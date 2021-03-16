import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { bankCard } from '../../schemas';
import { Map } from 'immutable';
import { getTransformedBankCard } from '../../helpers';

/**
 *
 * @param requestBody {Object}
 * @param id {String}
 */
export default ({ requestBody, id }) => requestAsync({
  url: endpoints.getBankCardByIdUrl(id),
  queryKey: `put${endpoints.getBankCardByIdUrl(id)}`,
  transform: response =>
    normalize(getTransformedBankCard(response.data), bankCard.schema).entities,
  body: requestBody.toJS(),
  meta: {
    authToken: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    bankCard: (prevBankCard = Map(), nextBankCard) =>
      prevBankCard.mergeDeep(nextBankCard),
  },
});
