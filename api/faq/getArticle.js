import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { article } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @param id {String}
 * @param successCallback {Function}
 * @param errorCallback {Function}
 */
export default ({ id, successCallback, errorCallback }) => requestAsync({
  url: endpoints.getArticleUrl(id),
  queryKey: endpoints.getArticleUrl(),
  transform: response =>
    normalize(response.data, article.schema).entities,
  transformResult: response => ({
    article: normalize(response.data, article.schema).result,
  }),
  meta: {
    errorKey: 'GET_ARTICLE',
    successCallback,
    errorCallback,
  },
  force: true,
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    article: (prevArticle = Map(), nextArticle) =>
      prevArticle.merge(nextArticle),
  },
  updateResult: {
    article: (_, result) => result,
  },
});
