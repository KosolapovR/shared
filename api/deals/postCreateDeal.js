import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { deal } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @typedef PostCreateDeals
 * @property offerId {String}
 * @property amountBuyerSends {Number}
 * @property amountSellerGets {Number}
 * @property formData {Array}
 *
 * @param {PostCreateDeals} body
 * @param errorCallback {Function}
 * @param successCallback {Function}
 */

export default ({
 body, errorCallback, successCallback, pinCode,
}) => requestAsync({
  url: endpoints.getDealUrl(),
  queryKey: `post${endpoints.getDealUrl()}`,
  transform: response =>
    normalize(response.data, deal.schema).entities,
  transformResult: response => ({
    deal: normalize(response.data, deal.schema).result,
  }),
  body,
  meta: {
    authToken: true,
    pinCode,
    errorKey: 'POST_CREATE_DEAL',
    errorCallback,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
  update: {
    deal: (prevBankCard = Map(), nextBankCard) =>
      prevBankCard.mergeDeep(nextBankCard),
  },
  updateResult: {
    deal: (prevResult, result) => result,
  },
});
