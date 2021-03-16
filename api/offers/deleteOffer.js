import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @typedef DeleteOffer
 * @property offer {String}
 *
 * @param {DeleteOffer} requestBody
 * @param errorCallback {Function}
 * @param successCallback {Function}
 */
export default ({ id, errorCallback, successCallback }) => requestAsync({
  url: endpoints.getOfferByIdUrl(id),
  queryKey: `delete${endpoints.getOfferByIdUrl()}`,
  meta: {
    authToken: true,
    errorKey: 'DELETE_OFFER',
    errorCallback,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'DELETE',
  },
  update: {
    offer: prevResult => prevResult.filter(item => item.get('_id') !== id),
  },
  updateResult: {
    offers: prevResult => prevResult.filter(item => item !== id),
  },
});
