import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @typedef DeleteBankCard
 * @property id {String}
 *
 * @param {DeleteBankCard} requestBody
 */
export default ({ id, successCallback }) => requestAsync({
  url: endpoints.getBankCardByIdUrl(id),
  queryKey: `delete${endpoints.getBankCardByIdUrl(id)}`,
  meta: {
    authToken: true,
    successCallback,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'DELETE',
  },
  update: {
    bankCard: entities => entities.delete(id),
  },
  updateResult: {
    bankCards: results => results.filter(item => item !== id),
  },
});
