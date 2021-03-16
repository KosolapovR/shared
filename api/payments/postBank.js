import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { mergeEntities } from '../../helpers';

/**
 *
 * @param body {Object}
 * @param successCallback {Function}
 */
export default ({ body, successCallback }) => requestAsync({
  url: endpoints.getBanksUrl({ type: 'simple' }),
  queryKey: `post${endpoints.getBanksUrl()}`,
  transformResult: response => ({
    banks: response.data,
  }),
  body,
  meta: {
    authToken: true,
    successCallback,
    errorKey: 'POST_BANK',
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'POST',
  },
  updateResult: {
    banks: (prevResult, result) => {
      const index = prevResult.findIndex(prev => prev.get('id') === result.get('id'));
      if (index >= 0) {
        return prevResult.update(index, item => mergeEntities(item, result));
      }

      return prevResult.push(result);
    },
  },
});
