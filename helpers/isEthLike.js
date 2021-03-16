import { blockchain } from '../consts';

/**
* Функция, которая проверяет является ли криптовалюта eth-like
*
* @param {String} alias - псевдоним криптовалюты
*
* @returns {Boolean} Булевое значение, true - если криптовалюта является eth-like, иначе false
 */

export default alias =>
  blockchain.ETH_LIKE.some(item => item === alias);
