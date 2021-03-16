import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import { normalize } from 'normalizr';
import endpoints from '../../api/endpoints';
import { term } from '../../schemas';
import { Map } from 'immutable';

export default () => requestAsync({
  url: endpoints.getTermsUrl(),
  transform: response => normalize(response.data, term.schemasArray).entities,
  transformResult: response => ({
    terms: normalize(response.data, term.schemasArray).result,
  }),
  queryKey: endpoints.getTermsUrl(),
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
    term: (prevEntities = Map(), nextEntities) =>
      prevEntities.mergeDeep(nextEntities),
  },
  updateResult: {
    terms: (prevResult, result) => result,
  },
});
