import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { offer } from '../../schemas';
import { Map, List } from 'immutable';
import { getTransformedOffer } from '../../helpers';

/**
 *
 * @param requestBody {Object}
 * @param errorCallback {Function}
 * @param successCallback {Function}
 * @param pinCode {string}
 */
export default ({
 requestBody, errorCallback, successCallback, pinCode,
}) => requestAsync({
  url: endpoints.getCreateOfferUrl(),
  queryKey: endpoints.getCreateOfferUrl(),
  transform: response => normalize(getTransformedOffer(response.data), offer.schema).entities,
  transformResult: response => ({
    offers: normalize(getTransformedOffer(response.data), offer.schema).result,
  }),
  body: requestBody,
  meta: {
    authToken: true,
    pinCode,
    withoutErrorToast: true,
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
    offer: (prevOffer = Map(), nextOffer) =>
      prevOffer.mergeDeep(nextOffer),
  },
  updateResult: {
    offers: (prevResult = List(), result) => prevResult.push(result),
  },
});
