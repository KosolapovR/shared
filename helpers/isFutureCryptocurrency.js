import { blockchain } from '../consts';

/**
* Функция, которая проверяет является ли криптовалюта новый (еще не добавленной на сервис)
*
* @param {String} alias - псевдоним криптовалюты
*
* @returns {Boolean} Булевое значение, true - если криптовалюта является новой, иначе false
 */

export default alias =>
  blockchain.FUTURE_CURRENCIES.some(item => item === alias);
