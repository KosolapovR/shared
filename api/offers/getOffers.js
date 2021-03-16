import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { offer } from '../../schemas';
import { getTransformedOffers } from '../../helpers';
import { Map } from 'immutable';

/**
 *
 * @param id {String}
 * @param errorCallback {Function}
 */
export default ({ id, errorCallback }) => requestAsync({
  url: endpoints.getOffersUrl({ userId: id }),
  queryKey: endpoints.getOffersUrl(),
  transform: response =>
    normalize(getTransformedOffers(response.data), offer.schemasArray).entities,
  transformResult: response => ({
    offers: normalize(getTransformedOffers(response.data), offer.schemasArray).result,
  }),
  meta: {
    authToken: true,
    errorKey: 'GET_OFFERS',
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
    offers: (_, result) => result,
  },
});
