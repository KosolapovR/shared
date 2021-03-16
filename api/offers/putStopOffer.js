import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { offer } from '../../schemas';
import { Map } from 'immutable';
import { getTransformedOffer } from '../../helpers';

/**
 *
 * @typedef PutStopOffer
 * @property id {String}
 *
 * @param {PutStopOffer} requestBody
 * @param errorCallback {Function}
 * @param successCallback {Function}
 */
export default ({ id, errorCallback, successCallback }) => requestAsync({
  url: endpoints.getToggleOfferUrl(id, 'stop'),
  queryKey: endpoints.getToggleOfferUrl(),
  transform: response => normalize(getTransformedOffer(response.data), offer.schema).entities,
  meta: {
    authToken: true,
    errorKey: 'STOP_OFFER',
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
