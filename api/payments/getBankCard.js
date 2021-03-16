import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { bankCard } from '../../schemas';
import { Map } from 'immutable';
import { getTransformedBankCard } from '../../helpers';

/**
 *
 * @param id {String}
 */
export default ({ id }) => requestAsync({
  url: endpoints.getBankCardByIdUrl(id),
  queryKey: endpoints.getBankCardByIdUrl(),
  transform: response =>
    normalize(getTransformedBankCard(response.data), bankCard.schema).entities,
  transformResult: response => ({
    bankCard: normalize(getTransformedBankCard(response.data), bankCard.schema).result,
  }),
  meta: {
    authToken: true,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    bankCard: (prevBankCard = Map(), nextBankCard) =>
      prevBankCard.mergeDeep(nextBankCard),
  },
  updateResult: {
    bankCard: (_, result) => result,
  },
});
