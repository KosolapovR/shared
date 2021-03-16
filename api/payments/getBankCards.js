import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { bankCard } from '../../schemas';
import { Map } from 'immutable';
import { getTransformedBankCards } from '../../helpers';

export default () => requestAsync({
  url: endpoints.getBankCardUrl(),
  queryKey: endpoints.getBankCardUrl(),
  transform: response =>
    normalize(getTransformedBankCards(response.data), bankCard.schemasArray).entities,
  transformResult: response => ({
    bankCards: normalize(getTransformedBankCards(response.data), bankCard.schemasArray).result,
  }),
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
    bankCard: (prevBankCard = Map(), nextBankCard) =>
      prevBankCard.mergeDeep(nextBankCard),
  },
  updateResult: {
    bankCards: (_, result) => result,
  },
});
