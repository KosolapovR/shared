import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { offer } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @param id {String}
 * @param successCallback {Function}
 * @param errorCallback {Function}
 */
export default ({ id, successCallback, errorCallback }) => requestAsync({
  url: endpoints.getOfferByIdUrl(id),
  queryKey: endpoints.getOfferByIdUrl(),
  transform: response =>
    normalize(response.data, offer.schema).entities,
  transformResult: response => ({
    offer: normalize(response.data, offer.schema).result,
  }),
  meta: {
    authToken: true,
    successCallback,
    errorCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    offer: (prevOffer = Map(), nextOffer) =>
      prevOffer.mergeDeep(nextOffer),
  },
  updateResult: {
    offer: (_, result) => result,
  },
});
