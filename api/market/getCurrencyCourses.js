import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { course } from '../../schemas';
import { Map } from 'immutable';

/**
 *
 * @typedef GetCurrencyCourses
 * @property currencies {String || Array}
 *
 * @param {string} quotedCurrency
 * @param {GetCurrencyCourses} queryParams
 * @param successCallback {Function}
 * @param resultKey {String}
 */
export default ({
 quotedCurrency, queryParams, successCallback, resultKey = 'courses',
} = { resultKey: 'courses' }) => requestAsync({
  url: endpoints.getCurrencyCoursesUrl(quotedCurrency, queryParams),
  queryKey: endpoints.getCurrencyCoursesUrl(),
  transform: (response) => {
    const transformedArray = [];
    Object.entries(response.data).forEach((arr) => {
      transformedArray.push({
        rate: arr[1],
        sellCurrency: arr[0],
      });
    });
    return normalize(transformedArray, course.schemasArray).entities;
  },
  transformResult: (response) => {
    const transformedArray = [];
    Object.entries(response.data).forEach((arr) => {
      transformedArray.push({
        rate: arr[1],
        sellCurrency: arr[0],
      });
    });
    return ({
      [resultKey]: normalize(transformedArray, course.schemasArray).result,
    });
  },
  meta: {
    authToken: true,
    successCallback,
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    course: (prevWallet = Map(), nextWallet) => prevWallet.merge(nextWallet),
  },
  updateResult: {
    [resultKey]: (_, result) => result,
  },
});
