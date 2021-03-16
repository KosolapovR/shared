import { requestAsync } from '@digitalwing.co/redux-query-immutable';
import endpoints from '../../api/endpoints';

/**
 *
 * @param successCallback {Function}
 */
export default ({ successCallback } = {}) => requestAsync({
    url: endpoints.getProfitLimitsUrl(),
    queryKey: endpoints.getProfitLimitsUrl(),
    transformResult: response => ({
        profitLimits: response.data,
    }),
    meta: {
        successCallback,
    },
    options: {
        headers: {
            Accept: 'application/json',
        },
        method: 'GET',
    },
    updateResult: {
        profitLimits: (_, result) => result,
    },
});
