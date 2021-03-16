import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { offer } from '../../schemas';
import { Map } from 'immutable';
import { getTransformedOffer } from '../../helpers';

/**
 *
 * @typedef PutRunOffer
 * @property id {String}
 *
 * @param {PutRunOffer} requestBody
 * @param errorCallback {Function}
 * @param successCallback {Function}
 * @param pinCode {string}
 */
export default ({
 id, pinCode, errorCallback, successCallback,
}) => requestAsync({
  url: endpoints.getToggleOfferUrl(id, 'start'),
  queryKey: endpoints.getToggleOfferUrl(),
  transform: response => normalize(getTransformedOffer(response.data), offer.schema).entities,
  meta: {
    authToken: true,
    errorKey: 'RUN_OFFER',
    pinCode,
    errorCallback,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    offer: (prevOffer = Map(), nextOffer) => prevOffer.mergeDeep(nextOffer),
  },
});
