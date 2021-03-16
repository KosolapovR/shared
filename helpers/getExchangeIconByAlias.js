import defaultExchangeIcon from '../assets/img/exchanges/custom.svg';
import defaultExchangeIconMobile from '../assets/img/exchanges/custom-grey.svg';

/**
 * Функци для получения иконки
 *
 * @param exchanges {Immutable.list} Список бирж
 * @param alias {String} Строка по которой будет сравнение с alias биржи
 * @param isMobile {Boolean} тип устройства
 * @returns {String} Возвращает адрес картинки
 */
export default (exchanges, alias, isMobile = false) => {
  if (exchanges && exchanges.size) {
    const result = exchanges.find(
      E => E.get('alias') === (alias.toLowerCase() === 'combined' ? 'coinity' : alias.toLowerCase()),
    );

    if (result && parseInt(result.get('icon'), 10) !== 1) {
      return result.get('icon');
    }
    return isMobile ? defaultExchangeIconMobile : defaultExchangeIcon;
  }

  return isMobile ? defaultExchangeIconMobile : defaultExchangeIcon;
};
