import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { notification } from '../../schemas';

/**
 * @typedef GetNotification
 * @property {Number} page
 * @property {Number} limit
 * @property {String} type
 *
 * @param {GetNotification} requestBody
 */
export default (requestBody = { page: 1, limit: 5, type: 'app' }) => requestAsync({
  url: endpoints.getNotificationsUrl(requestBody),
  queryKey: endpoints.getNotificationsUrl(),
  transform: response =>
    normalize(response.data, notification.schemasArray).entities,
  transformResult: response => ({
    notifications: normalize(response.data, notification.schemasArray).result,
    isNotificationsUnread: !!response.data.some(N => !N.readed),
    notificationsMeta: response.meta,
  }),
  meta: {
    authToken: true,
    withoutErrorToast: true,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    notification: (_, nextNotification) => nextNotification,
  },
  updateResult: {
    notifications: (prevResult, result) => result,
    isNotificationsUnread: (_, result) => result,
    notificationsMeta: (_, newMeta) => newMeta,
  },
});
