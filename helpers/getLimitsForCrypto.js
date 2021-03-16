import getResourceInfoByOptions from './getResourceInfoByOptions';

/**
 * Функция для получения лимитов крипто валюты к крипто валюте
 *
 * @param {String} currencyAlias alias криптовалюты
 * @returns {Object} Возвращается объект с максимальным и минимальным лимитом
 */
export default (currencyAlias) => {
  const currencyInfo = getResourceInfoByOptions(null, { searchKey: 'alias', searchValue: currencyAlias.toLowerCase() });

  if (currencyInfo.size) {
    const refundLimitsInfo = currencyInfo.get('limits', []).find(item => (item.get('type') === 'crypto'));
    if (refundLimitsInfo) {
      return {
        min: refundLimitsInfo.get('min'),
        max: refundLimitsInfo.get('max'),
      };
    }
  }

  return {};
};
