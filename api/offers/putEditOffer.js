import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { offer } from '../../schemas';
import { Map } from 'immutable';
import { getTransformedOffer } from '../../helpers';

/**
 *
 * @param requestBody {Object}
 * @param errorCallback {Function}
 * @param successCallback {Function}
 */
export default ({
 requestBody, errorCallback, successCallback, pinCode,
}) => requestAsync({
  url: endpoints.getCreateOfferUrl(),
  queryKey: `put${endpoints.getCreateOfferUrl()}`,
  transform: response => normalize(getTransformedOffer(response.data), offer.schema).entities,
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
    method: 'PUT',
  },
  update: {
    offer: (prevOffer = Map(), nextOffer) => prevOffer.mergeDeep(nextOffer),
  },
});
