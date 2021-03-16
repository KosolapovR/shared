import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';
import { normalize } from 'normalizr';
import { ticker } from '../../schemas';

/**
 *
 * @typedef GetTickers
 * @property symbol {String}
 *
 * @param {GetTickers} requestBody
 */
export default requestBody => requestAsync({
  url: endpoints.getTickersUrl(requestBody),
  queryKey: endpoints.getTickersUrl(),
  transform: (body, response) => {
    try {
      const result = JSON.parse(response);

      return normalize(result.data, ticker.schemasArray).entities;
    } catch (err) {
      return normalize([], ticker.schemasArray).entities;
    }
  },
  transformResult: (body, response) => {
    try {
      const result = JSON.parse(response);

      return {
        tickers: normalize(result.data, ticker.schemasArray).result,
      };
    } catch (err) {
      return {
        tickers: normalize([], ticker.schemasArray).result,
      };
    }
  },
  meta: {
    authToken: false,
    errorKey: 'GET_TICKERS',
  },
  options: {
    headers: {
      Accept: 'application/json',
    },
    method: 'GET',
  },
  update: {
    ticker: (_, nextTicker) => nextTicker,
  },
  updateResult: {
    tickers: (_, result) => result,
  },
});
