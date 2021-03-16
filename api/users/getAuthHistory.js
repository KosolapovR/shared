import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import { authHistory } from '../../schemas';
import endpoints from '../endpoints';

/**
 *
 * @param page {Number}
 * @param count {Number}
 */
export default ({ page, count }) => requestAsync({
  url: endpoints.getAuthHistoryUrl({ page, count }),
  queryKey: endpoints.getAuthHistoryUrl({}),
  transform: ({ data }) => normalize(data, authHistory.schemasArray).entities,
  transformResult: ({ meta, data }) => ({
    authHistory: normalize(data, authHistory.schemasArray).result,
    authHistoryMeta: meta,
  }),
  meta: {
    authToken: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    authHistory: (_, newHistoryData) => newHistoryData,
  },
  updateResult: {
    authHistory: (_, newAuthHistoryResult) => newAuthHistoryResult,
    authHistoryMeta: (_, newHistoryMeta) => newHistoryMeta,
  },
});
