import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../endpoints';

export default () => requestAsync({
  url: endpoints.getSecretQuestionsUrl(),
  queryKey: endpoints.getSecretQuestionsUrl(),
  transformResult: ({ data }) => ({
    secretQuestions: data,
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
  updateResult: {
    secretQuestions: (_, secretQuestions) => secretQuestions,
  },
});
