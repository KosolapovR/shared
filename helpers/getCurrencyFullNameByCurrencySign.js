/**
 * Функция которая используется для полного описания абривиатуры искомой валюты
 *
 * @param currencyCode {String} Искомый код валюты
 * @param t {Function} Функция которая принимает ключ, и возвращает текст
 * @returns {null|string} Возвращает описание валюты или ошибку если такой валюты нет на сервисе
 */
export default (currencyCode, t) => {
  switch (currencyCode) {
    case 'RUB': return t('SETTINGS.CURRENCIES.RUB');
    case 'USD': return t('SETTINGS.CURRENCIES.USD');
    case 'UAH': return t('SETTINGS.CURRENCIES.UAH');
    case 'EUR': return t('SETTINGS.CURRENCIES.EUR');
    case 'KZT': return t('SETTINGS.CURRENCIES.KZT');
    case 'GEL': return t('SETTINGS.CURRENCIES.GEL');
    case 'VEF': return t('SETTINGS.CURRENCIES.VEF');
    case 'CNY': return t('SETTINGS.CURRENCIES.CNY');
    case 'INR': return t('SETTINGS.CURRENCIES.INR');
    case 'GBP': return t('SETTINGS.CURRENCIES.GBP');
    case 'CAD': return t('SETTINGS.CURRENCIES.CAD');
    case 'CHF': return t('SETTINGS.CURRENCIES.CHF');

    default: return null;
  }
};
