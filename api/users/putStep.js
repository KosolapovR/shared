import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import { Map } from 'immutable';
import { user } from '../../schemas';
import endpoints from '../endpoints';

export default ({ requestBody, successCallback }) => requestAsync({
  url: endpoints.getChangeStep(),
  queryKey: endpoints.getChangeStep(),
  transform: ({ data }) => normalize(data, user.schema).entities,
  body: requestBody,
  meta: {
    authToken: true,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'PUT',
  },
  update: {
    user: (prevUser = Map(), newUser) =>
      prevUser.merge(newUser),
  },
});
