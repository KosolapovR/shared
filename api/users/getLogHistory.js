import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { logItem } from '../../schemas';
import { normalize } from 'normalizr';
import endpoints from '../endpoints';

/**
 *
 * @param page {Number}
 * @param count {Number}
 */
export default ({ page, count }) => requestAsync({
  url: endpoints.getLogHistoryUrl({ page, count }),
  queryKey: endpoints.getLogHistoryUrl({}),
  transform: ({ data }) => normalize(data, logItem.schemaArray).entities,
  transformResult: ({ data, meta }) => ({
    logHistory: normalize(data, logItem.schemaArray).result,
    logHistoryMeta: meta,
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
    logHistory: (_, newLogItemList) => newLogItemList,
  },
  updateResult: {
    logHistory: (_, newLogItemList) => newLogItemList,
    logHistoryMeta: (_, newLogItemMeta) => newLogItemMeta,
  },
});
