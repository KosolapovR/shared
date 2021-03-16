import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { bankCard } from '../../schemas';
import { Map, List } from 'immutable';
import { getTransformedBankCard } from '../../helpers';

/**
 *
 * @param requestBody {Object}
 * @param successCallback {Function}
 */
export default ({ requestBody, successCallback }) => requestAsync({
  url: endpoints.getBankCardUrl(),
  queryKey: `post${endpoints.getBankCardUrl()}`,
  transform: response =>
    normalize(getTransformedBankCard(response.data), bankCard.schema).entities,
  transformResult: response => ({
    bankCards: normalize(getTransformedBankCard(response.data), bankCard.schema).result,
  }),
  body: requestBody,
  meta: {
    authToken: true,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
  update: {
    bankCard: (prevBankCard = Map(), nextBankCard) =>
      prevBankCard.mergeDeep(nextBankCard),
  },
  updateResult: {
    bankCards: (prevResult = List(), result) => prevResult.push(result),
  },
});
