import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @param page {Number}
 * @param count {Number}
 * @param value {String}
 */
export default ({
  page = 1,
  count = 20,
  value = '',
} = {}) => requestAsync({
  url: endpoints.getFaqSearchUrl({ page, count, body: value }),
  queryKey: endpoints.getFaqSearchUrl(),
  transformResult: response => ({
    faqSearchResults: response.data,
  }),
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  updateResult: {
    faqSearchResults: (_, result) => result,
  },
});
