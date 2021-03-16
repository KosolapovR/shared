import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { Map } from 'immutable';

export default () => requestAsync({
  url: endpoints.getReadNotificationsUrl(),
  queryKey: endpoints.getReadNotificationsUrl(),
  transformResult: response => ({
    isNotificationsUnread: !response.success,
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
    notification: (prevEntities = Map()) => {
      if (prevEntities.size) {
        let prevEntitiesModify = prevEntities;

        prevEntities.forEach((item) => {
          if (!item.get('readed')) {
            prevEntitiesModify = prevEntitiesModify.setIn([item.get('id'), 'readed'], true);
          }
        });

        return prevEntitiesModify;
      }

      return prevEntities;
    },
  },
  updateResult: {
    isNotificationsUnread: (_, result) => result,
  },
});
